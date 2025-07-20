"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { authOperations, dbOperations } from "@/lib/supabase";
import {
  Users,
  Store,
  Search,
  MapPin,
  Clock,
  User,
  Edit,
  Save,
  X,
  Loader2,
} from "lucide-react";

export default function DashboardPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [users, setUsers] = useState([]);
  const [stores, setStores] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [storeSearch, setStoreSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editProfileData, setEditProfileData] = useState({});
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    checkAuthAndFetchData();
  }, []);

  const checkAuthAndFetchData = async () => {
    try {
      const user = await authOperations.getCurrentUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setCurrentUser(user);
      await fetchData(user.id);
    } catch (error) {
      console.error("Auth check failed:", error);
      router.push("/login");
    }
  };

  const fetchData = async (userId) => {
    setIsLoading(true);
    try {
      const [profile, usersData, storesData] = await Promise.all([
        dbOperations.getUserById(userId).catch(() => null),
        dbOperations.getUsers(userId),
        dbOperations.getStores(userId),
      ]);

      setUserProfile(profile);
      setUsers(usersData || []);
      setStores(storesData || []);

      if (profile) {
        setEditProfileData({
          name: profile.name || "",
          age: profile.age || "",
          gender: profile.gender || "",
          location: profile.location || "",
          bio: profile.bio || "",
          privacy: profile.privacy || "public",
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        title: "Error",
        description: "Failed to fetch data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await authOperations.signOut();
      toast({
        title: "Signed Out",
        description: "You have been successfully signed out.",
      });
      router.push("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleEditProfile = () => {
    setIsEditingProfile(true);
  };

  const handleCancelEdit = () => {
    setIsEditingProfile(false);
    if (userProfile) {
      setEditProfileData({
        name: userProfile.name || "",
        age: userProfile.age || "",
        gender: userProfile.gender || "",
        location: userProfile.location || "",
        bio: userProfile.bio || "",
        privacy: userProfile.privacy || "public",
      });
    }
  };

  const handleSaveProfile = async () => {
    setIsSavingProfile(true);
    try {
      const updates = {
        ...editProfileData,
        age: Number.parseInt(editProfileData.age),
        updated_at: new Date().toISOString(),
      };

      const updatedProfile = await dbOperations.updateUserProfile(
        currentUser.id,
        updates
      );
      setUserProfile(updatedProfile);
      setIsEditingProfile(false);

      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handleProfileInputChange = (e) => {
    setEditProfileData({
      ...editProfileData,
      [e.target.name]: e.target.value,
    });
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(userSearch.toLowerCase()) ||
      user.location?.toLowerCase().includes(userSearch.toLowerCase()) ||
      user.bio?.toLowerCase().includes(userSearch.toLowerCase())
  );

  const filteredStores = stores.filter(
    (store) =>
      store.store_name?.toLowerCase().includes(storeSearch.toLowerCase()) ||
      store.store_category?.toLowerCase().includes(storeSearch.toLowerCase()) ||
      store.store_location?.toLowerCase().includes(storeSearch.toLowerCase()) ||
      store.store_description?.toLowerCase().includes(storeSearch.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600">
                Welcome back, {currentUser?.email}
              </p>
            </div>
            <Button onClick={handleSignOut} variant="outline">
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Users ({filteredUsers.length})
            </TabsTrigger>
            <TabsTrigger value="stores" className="flex items-center gap-2">
              <Store className="h-4 w-4" />
              Stores ({filteredStores.length})
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              My Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription>
                  Browse and connect with other users
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search users by name, location, or bio..."
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    className="max-w-sm"
                  />
                </div>
              </CardHeader>
              <CardContent>
                {filteredUsers.length === 0 ? (
                  <div className="text-center py-8">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      {userSearch
                        ? "No users found matching your search."
                        : "No other users found."}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredUsers.map((user) => (
                      <div
                        key={user.userid}
                        className="border rounded-lg p-4 hover:bg-gray-50"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg">
                              {user.name || "No name"}
                            </h3>
                            <Badge
                              variant={
                                user.privacy === "public"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {user.privacy}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Age: {user.age}</span>
                            <span>•</span>
                            <span>{user.gender}</span>
                          </div>
                          {user.bio && (
                            <p className="text-sm text-gray-600">{user.bio}</p>
                          )}
                          {user.location && (
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <MapPin className="h-4 w-4" />
                              {user.location}
                            </div>
                          )}
                          <p className="text-xs text-gray-400">
                            Last updated:{" "}
                            {user.updated_at
                              ? new Date(user.updated_at).toLocaleDateString()
                              : "Unknown"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stores" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Stores</CardTitle>
                <CardDescription>
                  Discover local businesses and services
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search stores by name, category, or location..."
                    value={storeSearch}
                    onChange={(e) => setStoreSearch(e.target.value)}
                    className="max-w-sm"
                  />
                </div>
              </CardHeader>
              <CardContent>
                {filteredStores.length === 0 ? (
                  <div className="text-center py-8">
                    <Store className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      {storeSearch
                        ? "No stores found matching your search."
                        : "No stores found."}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredStores.map((store) => (
                      <div
                        key={store.store_id}
                        className="border rounded-lg p-4 hover:bg-gray-50"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg">
                              {store.store_name || "No name"}
                            </h3>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant={
                                  store.is_open ? "default" : "secondary"
                                }
                              >
                                {store.is_open ? "Open" : "Closed"}
                              </Badge>
                            </div>
                          </div>
                          {store.store_category && (
                            <Badge variant="outline">
                              {store.store_category}
                            </Badge>
                          )}
                          {store.store_description && (
                            <p className="text-sm text-gray-600">
                              {store.store_description}
                            </p>
                          )}
                          {store.store_location && (
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <MapPin className="h-4 w-4" />
                              {store.store_location}
                            </div>
                          )}
                          {store.working_hours && (
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Clock className="h-4 w-4" />
                              {store.working_hours}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>My Profile</CardTitle>
                    <CardDescription>
                      Manage your personal information
                    </CardDescription>
                  </div>
                  {!isEditingProfile && (
                    <Button
                      onClick={handleEditProfile}
                      variant="outline"
                      className="flex items-center gap-2 bg-transparent"
                    >
                      <Edit className="h-4 w-4" />
                      Edit Profile
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {userProfile ? (
                  <div className="space-y-6">
                    {isEditingProfile ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="edit-name">Full Name</Label>
                            <Input
                              id="edit-name"
                              name="name"
                              value={editProfileData.name}
                              onChange={handleProfileInputChange}
                              disabled={isSavingProfile}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edit-age">Age</Label>
                            <Input
                              id="edit-age"
                              name="age"
                              type="number"
                              value={editProfileData.age}
                              onChange={handleProfileInputChange}
                              disabled={isSavingProfile}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edit-gender">Gender</Label>
                            <Select
                              value={editProfileData.gender}
                              onValueChange={(value) =>
                                setEditProfileData({
                                  ...editProfileData,
                                  gender: value,
                                })
                              }
                              disabled={isSavingProfile}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Male">Male</SelectItem>
                                <SelectItem value="Female">Female</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edit-location">Location</Label>
                            <Input
                              id="edit-location"
                              name="location"
                              value={editProfileData.location}
                              onChange={handleProfileInputChange}
                              disabled={isSavingProfile}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="edit-privacy">Privacy</Label>
                            <Select
                              value={editProfileData.privacy}
                              onValueChange={(value) =>
                                setEditProfileData({
                                  ...editProfileData,
                                  privacy: value,
                                })
                              }
                              disabled={isSavingProfile}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="public">Public</SelectItem>
                                <SelectItem value="private">Private</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="edit-bio">Bio</Label>
                          <Textarea
                            id="edit-bio"
                            name="bio"
                            value={editProfileData.bio}
                            onChange={handleProfileInputChange}
                            disabled={isSavingProfile}
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            onClick={handleSaveProfile}
                            disabled={isSavingProfile}
                          >
                            {isSavingProfile ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Saving...
                              </>
                            ) : (
                              <>
                                <Save className="mr-2 h-4 w-4" />
                                Save Changes
                              </>
                            )}
                          </Button>
                          <Button
                            onClick={handleCancelEdit}
                            variant="outline"
                            disabled={isSavingProfile}
                          >
                            <X className="mr-2 h-4 w-4" />
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold text-lg mb-2">
                              {userProfile.name}
                            </h3>
                            <div className="space-y-2 text-sm text-gray-600">
                              <p>Age: {userProfile.age}</p>
                              <p>Gender: {userProfile.gender}</p>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {userProfile.location}
                              </div>
                              <div className="flex items-center gap-2">
                                <span>Privacy:</span>
                                <Badge
                                  variant={
                                    userProfile.privacy === "public"
                                      ? "default"
                                      : "secondary"
                                  }
                                >
                                  {userProfile.privacy}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Bio</h4>
                            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                              {userProfile.bio || "No bio provided"}
                            </p>
                          </div>
                        </div>
                        <div className="text-xs text-gray-400">
                          Last updated:{" "}
                          {new Date(
                            userProfile.updated_at
                          ).toLocaleDateString()}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      No profile found. Please contact support.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
