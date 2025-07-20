-- Drop existing tables if they exist
DROP TABLE IF EXISTS public.user_locations;
DROP TABLE IF EXISTS public.store_profiles;
DROP TABLE IF EXISTS public.users_profile;

-- Create users_profile table
CREATE TABLE public.users_profile (
    userid UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    age INTEGER CHECK (age >= 13 AND age <= 120),
    gender VARCHAR(20) CHECK (gender IN ('Male', 'Female', 'Other')),
    location VARCHAR(200),
    bio TEXT,
    privacy VARCHAR(20) DEFAULT 'public' CHECK (privacy IN ('public', 'private')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create store_profiles table
CREATE TABLE public.store_profiles (
    store_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    userid UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    store_name VARCHAR(200) NOT NULL,
    store_location VARCHAR(300) NOT NULL,
    store_category VARCHAR(100) NOT NULL,
    store_description TEXT,
    working_hours VARCHAR(100),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    is_open BOOLEAN DEFAULT true,
    privacy VARCHAR(20) DEFAULT 'public' CHECK (privacy IN ('public', 'private')),
    upi_id VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_locations table
CREATE TABLE public.user_locations (
    location_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    userid UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    address VARCHAR(300),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_users_profile_userid ON public.users_profile(userid);
CREATE INDEX idx_users_profile_location ON public.users_profile(location);
CREATE INDEX idx_users_profile_privacy ON public.users_profile(privacy);

CREATE INDEX idx_store_profiles_userid ON public.store_profiles(userid);
CREATE INDEX idx_store_profiles_category ON public.store_profiles(store_category);
CREATE INDEX idx_store_profiles_location ON public.store_profiles(store_location);
CREATE INDEX idx_store_profiles_is_open ON public.store_profiles(is_open);

CREATE INDEX idx_user_locations_userid ON public.user_locations(userid);
CREATE INDEX idx_user_locations_coords ON public.user_locations(latitude, longitude);

-- Insert sample data for testing
INSERT INTO public.users_profile (userid, name, age, gender, location, bio, privacy, updated_at) VALUES
('11111111-1111-1111-1111-111111111111', 'John Doe', 25, 'Male', 'New York, NY', 'Love exploring new places and meeting people!', 'public', NOW()),
('22222222-2222-2222-2222-222222222222', 'Jane Smith', 30, 'Female', 'Los Angeles, CA', 'Foodie and travel enthusiast. Always looking for great local spots!', 'public', NOW()),
('33333333-3333-3333-3333-333333333333', 'Alex Johnson', 28, 'Other', 'Chicago, IL', 'Tech professional who loves discovering local businesses.', 'public', NOW()),
('44444444-4444-4444-4444-444444444444', 'Maria Garcia', 35, 'Female', 'Miami, FL', 'Local business supporter and community advocate.', 'public', NOW()),
('55555555-5555-5555-5555-555555555555', 'David Wilson', 42, 'Male', 'Seattle, WA', 'Coffee lover and small business enthusiast.', 'public', NOW());

INSERT INTO public.store_profiles (userid, store_name, store_location, store_category, store_description, working_hours, is_open, privacy, updated_at) VALUES
('66666666-6666-6666-6666-666666666666', 'Fresh Mart', '123 Main St, New York, NY', 'Kirana/Grocery Store', 'Your neighborhood grocery store with fresh produce and daily essentials.', '7:00 AM - 10:00 PM', true, 'public', NOW()),
('77777777-7777-7777-7777-777777777777', 'Style Hub', '456 Fashion Ave, Los Angeles, CA', 'Clothing Store', 'Trendy clothing for all ages. Latest fashion at affordable prices.', '10:00 AM - 9:00 PM', true, 'public', NOW()),
('88888888-8888-8888-8888-888888888888', 'Tech World', '789 Electronics Blvd, Chicago, IL', 'Electronics Store', 'Latest gadgets, smartphones, laptops and tech accessories.', '9:00 AM - 8:00 PM', true, 'public', NOW()),
('99999999-9999-9999-9999-999999999999', 'Cozy Cafe', '321 Coffee St, Seattle, WA', 'Restaurant/Food', 'Artisan coffee, fresh pastries and light meals in a cozy atmosphere.', '6:00 AM - 6:00 PM', true, 'public', NOW()),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Health Plus Pharmacy', '654 Wellness Dr, Miami, FL', 'Pharmacy', 'Full-service pharmacy with prescription medications and health products.', '8:00 AM - 9:00 PM', true, 'public', NOW()),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Book Haven', '987 Literary Lane, New York, NY', 'Book Store', 'Independent bookstore with curated selection of books and cozy reading nooks.', '10:00 AM - 8:00 PM', false, 'public', NOW());

-- Enable Row Level Security (RLS) - Optional, can be enabled later
-- ALTER TABLE public.users_profile ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.store_profiles ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.user_locations ENABLE ROW LEVEL SECURITY;

-- Create RLS policies (commented out for now to avoid permission issues)
-- CREATE POLICY "Users can view public profiles" ON public.users_profile FOR SELECT USING (privacy = 'public');
-- CREATE POLICY "Users can update own profile" ON public.users_profile FOR UPDATE USING (auth.uid() = userid);
-- CREATE POLICY "Users can view public stores" ON public.store_profiles FOR SELECT USING (privacy = 'public');
-- CREATE POLICY "Store owners can update own store" ON public.store_profiles FOR UPDATE USING (auth.uid() = userid);
