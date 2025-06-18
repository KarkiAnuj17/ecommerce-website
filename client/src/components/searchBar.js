"use client";

import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Mock search results - replace with your actual search logic
const mockSearchResults = [
  { id: 1, name: "iPhone 14 Pro", category: "Electronics", price: "$999" },
  { id: 2, name: "MacBook Air", category: "Electronics", price: "$1199" },
  { id: 3, name: "Nike Air Max", category: "Shoes", price: "$120" },
  { id: 4, name: "Samsung Galaxy S23", category: "Electronics", price: "$799" },
  { id: 5, name: "Adidas Ultraboost", category: "Shoes", price: "$180" },
];

const SearchBar = ({ onSearch, placeholder = "Search products...", className = "" }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.trim()) {
        handleSearch(query);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 200));

      const filteredResults = mockSearchResults.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults(filteredResults);
      setIsOpen(filteredResults.length > 0);

      if (onSearch) onSearch(searchQuery);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
  };

  const handleSelectItem = (item) => {
    setQuery("");
    setIsOpen(false);
    window.location.href = `/product/${item.id}`;
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-500 transition-all"
                onFocus={() => {
                  if (results.length > 0) {
                    setIsOpen(true);
                  }
                }}
              />
              {query && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-white/20"
                  onClick={clearSearch}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
          </form>
        </PopoverTrigger>

        {isOpen && (
          <PopoverContent className="w-80 p-0" align="start">
            <Command>
              <CommandList>
                {isLoading ? (
                  <CommandEmpty>Searching...</CommandEmpty>
                ) : results.length === 0 ? (
                  <CommandEmpty>No results found.</CommandEmpty>
                ) : (
                  <CommandGroup heading="Products">
                    {results.map((item) => (
                      <CommandItem
                        key={item.id}
                        onSelect={() => handleSelectItem(item)}
                        className="cursor-pointer"
                      >
                        <div className="flex items-center justify-between w-full">
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-gray-500">{item.category}</div>
                          </div>
                          <div className="font-semibold text-green-600">{item.price}</div>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </CommandList>
            </Command>
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
};

export default SearchBar;
