"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const StoreSettings = () => {
  const [storeName, setStoreName] = useState("My E-commerce Store")
  const [storeEmail, setStoreEmail] = useState("contact@mystore.com")
  const [storePhone, setStorePhone] = useState("1234567890")
  const [storeAddress, setStoreAddress] = useState("123 Main St, City, Country")
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    if (!storeEmail.includes("@")) {
      alert("Please enter a valid email.")
      return
    }
    if (storePhone.length < 10) {
      alert("Please enter a valid phone number.")
      return
    }

    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    alert("Settings saved!")
    setIsSaving(false)
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between space-x-2">
        <h1 className="text-3xl font-bold">Store Settings</h1>
        <div className="w-full max-w-sm">
          <Input id="search" name="search" type="search" placeholder="Search products..." />
        </div>
      </div>
      <Card className="w-full">
        <CardContent className="mt-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="storeName">Store Name</Label>
            <Input
              id="storeName"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)} />
            <p className="text-sm text-muted-foreground">
              This is the name of your store that customers will see.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="storeEmail">Store Email</Label>
            <Input
              id="storeEmail"
              type="email"
              value={storeEmail}
              onChange={(e) => setStoreEmail(e.target.value)} />
            <p className="text-sm text-muted-foreground">
              This email will be used for customer support inquiries.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="storePhone">Store Phone</Label>
            <Input
              id="storePhone"
              type="tel"
              value={storePhone}
              onChange={(e) => setStorePhone(e.target.value)} />
            <p className="text-sm text-muted-foreground">
              This phone number will be displayed for customer support.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="storeAddress">Store Address</Label>
            <Textarea
              id="storeAddress"
              value={storeAddress}
              onChange={(e) => setStoreAddress(e.target.value)}
              rows={3} />
            <p className="text-sm text-muted-foreground">
              This address will be used for shipping and legal purposes.
            </p>
          </div>

          <div className="flex justify-end">
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>);
}

export default StoreSettings

