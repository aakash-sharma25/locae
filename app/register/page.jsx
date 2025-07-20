"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { authOperations, dbOperations } from "@/lib/supabase";
import { Eye, EyeOff, Loader2, User, Store } from "lucide-react";

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    gender: "",
    location: "",
    bio: "",
  });

  const [storeFormData, setStoreFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    gender: "",
    location: "",
    bio: "",
    storeName: "",
    storeLocation: "",
    storeCategory: "",
    storeDescription: "",
    workingHours: "",
  });

  const businessTypes = [
    "Clothing Store",
    "Kirana/Grocery Store",
    "Furniture Store",
    "Electronics Store",
    "Restaurant/Food",
    "Pharmacy",
    "Book Store",
    "Hardware Store",
    "Beauty/Salon",
    "Other",
  ];

  const handleUserChange = (e) => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStoreChange = (e) => {
    setStoreFormData({
      ...storeFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create auth user
      const { data: authData, error: authError } = await authOperations.signUp(
        userFormData.email,
        userFormData.password,
        {
          name: userFormData.name,
          user_type: "user",
        }
      );

      if (authError) {
        toast({
          title: "Registration Failed",
          description: authError.message,
          variant: "destructive",
        });
        return;
      }

      if (authData.user) {
        // Create user profile
        const userProfile = {
          userid: authData.user.id,
          name: userFormData.name,
          age: Number.parseInt(userFormData.age),
          gender: userFormData.gender,
          location: userFormData.location,
          bio: userFormData.bio,
          privacy: "public",
          updated_at: new Date().toISOString(),
        };

        await dbOperations.createUserProfile(userProfile);

        toast({
          title: "Registration Successful",
          description: "Your account has been created. You can now sign in.",
        });
        router.push("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleStoreSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create auth user
      const { data: authData, error: authError } = await authOperations.signUp(
        storeFormData.email,
        storeFormData.password,
        {
          name: storeFormData.name,
          user_type: "store_owner",
        }
      );

      if (authError) {
        toast({
          title: "Registration Failed",
          description: authError.message,
          variant: "destructive",
        });
        return;
      }

      if (authData.user) {
        // Create user profile
        const userProfile = {
          userid: authData.user.id,
          name: storeFormData.name,
          age: Number.parseInt(storeFormData.age),
          gender: storeFormData.gender,
          location: storeFormData.location,
          bio: storeFormData.bio,
          privacy: "public",
          updated_at: new Date().toISOString(),
        };

        await dbOperations.createUserProfile(userProfile);

        // Create store profile
        const storeProfile = {
          userid: authData.user.id,
          store_name: storeFormData.storeName,
          store_location: storeFormData.storeLocation,
          store_category: storeFormData.storeCategory,
          store_description: storeFormData.storeDescription,
          working_hours: storeFormData.workingHours,
          is_open: true,
          privacy: "public",
          updated_at: new Date().toISOString(),
        };

        await dbOperations.createStoreProfile(storeProfile);

        toast({
          title: "Registration Successful",
          description:
            "Your store account has been created. You can now sign in.",
        });
        router.push("/login");
      }
    } catch (error) {
      console.error("Store registration error:", error);
      toast({
        title: "Error",
        description: "Failed to create store account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Join Locae
          </CardTitle>
          <CardDescription className="text-center">
            Create your account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="user" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                User Account
              </TabsTrigger>
              <TabsTrigger value="store" className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                Store Owner
              </TabsTrigger>
            </TabsList>

            <TabsContent value="user" className="space-y-4 mt-6">
              <form onSubmit={handleUserSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="user-email">Email</Label>
                    <Input
                      id="user-email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={userFormData.email}
                      onChange={handleUserChange}
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="user-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={userFormData.password}
                        onChange={handleUserChange}
                        required
                        minLength={6}
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user-name">Full Name</Label>
                    <Input
                      id="user-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={userFormData.name}
                      onChange={handleUserChange}
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user-age">Age</Label>
                    <Input
                      id="user-age"
                      name="age"
                      type="number"
                      placeholder="Enter your age"
                      value={userFormData.age}
                      onChange={handleUserChange}
                      required
                      min="13"
                      max="120"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user-gender">Gender</Label>
                    <Select
                      value={userFormData.gender}
                      onValueChange={(value) =>
                        setUserFormData({ ...userFormData, gender: value })
                      }
                      disabled={isLoading}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user-location">Location</Label>
                    <Input
                      id="user-location"
                      name="location"
                      type="text"
                      placeholder="Enter your location"
                      value={userFormData.location}
                      onChange={handleUserChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="user-bio">Bio (Optional)</Label>
                  <Textarea
                    id="user-bio"
                    name="bio"
                    placeholder="Tell us about yourself"
                    value={userFormData.bio}
                    onChange={handleUserChange}
                    disabled={isLoading}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Create User Account"
                  )}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="store" className="space-y-4 mt-6">
              <form onSubmit={handleStoreSubmit} className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="store-email">Email</Label>
                      <Input
                        id="store-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={storeFormData.email}
                        onChange={handleStoreChange}
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="store-password">Password</Label>
                      <div className="relative">
                        <Input
                          id="store-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          value={storeFormData.password}
                          onChange={handleStoreChange}
                          required
                          minLength={6}
                          disabled={isLoading}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                          disabled={isLoading}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="store-name">Full Name</Label>
                      <Input
                        id="store-name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={storeFormData.name}
                        onChange={handleStoreChange}
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="store-age">Age</Label>
                      <Input
                        id="store-age"
                        name="age"
                        type="number"
                        placeholder="Enter your age"
                        value={storeFormData.age}
                        onChange={handleStoreChange}
                        required
                        min="18"
                        max="120"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="store-gender">Gender</Label>
                      <Select
                        value={storeFormData.gender}
                        onValueChange={(value) =>
                          setStoreFormData({ ...storeFormData, gender: value })
                        }
                        disabled={isLoading}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="store-location">Personal Location</Label>
                      <Input
                        id="store-location"
                        name="location"
                        type="text"
                        placeholder="Enter your location"
                        value={storeFormData.location}
                        onChange={handleStoreChange}
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="store-bio">Bio (Optional)</Label>
                    <Textarea
                      id="store-bio"
                      name="bio"
                      placeholder="Tell us about yourself"
                      value={storeFormData.bio}
                      onChange={handleStoreChange}
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Store Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="storeName">Store Name</Label>
                      <Input
                        id="storeName"
                        name="storeName"
                        type="text"
                        placeholder="Enter store name"
                        value={storeFormData.storeName}
                        onChange={handleStoreChange}
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="storeLocation">Store Location</Label>
                      <Input
                        id="storeLocation"
                        name="storeLocation"
                        type="text"
                        placeholder="Enter store location"
                        value={storeFormData.storeLocation}
                        onChange={handleStoreChange}
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="storeCategory">Business Type</Label>
                      <Select
                        value={storeFormData.storeCategory}
                        onValueChange={(value) =>
                          setStoreFormData({
                            ...storeFormData,
                            storeCategory: value,
                          })
                        }
                        disabled={isLoading}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="workingHours">Working Hours</Label>
                      <Input
                        id="workingHours"
                        name="workingHours"
                        type="text"
                        placeholder="e.g., 9:00 AM - 9:00 PM"
                        value={storeFormData.workingHours}
                        onChange={handleStoreChange}
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="storeDescription">Store Description</Label>
                    <Textarea
                      id="storeDescription"
                      name="storeDescription"
                      placeholder="Describe your store and services"
                      value={storeFormData.storeDescription}
                      onChange={handleStoreChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Store Account...
                    </>
                  ) : (
                    "Create Store Account"
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
