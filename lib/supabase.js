import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth operations
export const authOperations = {
  // Sign up user without email verification
  async signUp(email, password, userData) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
        emailRedirectTo: undefined, // Disable email verification
      },
    });
    return { data, error };
  },

  // Sign in user
  async signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  // Sign out user
  async signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  // Get current user
  async getCurrentUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  },
};

// Database operations
export const dbOperations = {
  // User operations
  async getUsers() {
    const { data, error } = await supabase
      .from("users_profile")
      .select("*")
      .order("updated_at", { ascending: false });

    if (error) throw error;
    return data;
  },

  async getUserById(userid) {
    const { data, error } = await supabase
      .from("users_profile")
      .select("*")
      .eq("userid", userid)
      .single();

    if (error) throw error;
    return data;
  },

  async createUserProfile(userProfile) {
    const { data, error } = await supabase
      .from("users_profile")
      .insert(userProfile)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateUserProfile(userid, updates) {
    const { data, error } = await supabase
      .from("users_profile")
      .update(updates)
      .eq("userid", userid)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  // Store operations
  async getStores() {
    const { data, error } = await supabase
      .from("store_profiles")
      .select("*")
      .order("store_name", { ascending: true });

    if (error) throw error;
    return data;
  },

  async getStoreById(store_id) {
    const { data, error } = await supabase
      .from("store_profiles")
      .select("*")
      .eq("store_id", store_id)
      .single();

    if (error) throw error;
    return data;
  },

  async createStoreProfile(storeProfile) {
    const { data, error } = await supabase
      .from("store_profiles")
      .insert(storeProfile)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Location operations
  async getUserLocation(userid) {
    const { data, error } = await supabase
      .from("user_locations")
      .select("*")
      .eq("userid", userid)
      .single();

    if (error) throw error;
    return data;
  },

  async updateUserLocation(location) {
    const { data, error } = await supabase
      .from("user_locations")
      .upsert(location)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
