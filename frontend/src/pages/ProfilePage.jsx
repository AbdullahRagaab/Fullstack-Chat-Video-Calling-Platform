import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAuthUser, updateProfile, getUserFriends } from "../lib/api";
import FriendCard from "../components/FriendCard";
import NoFriendsFound from "../components/NoFriendsFound";
import { ShuffleIcon } from "lucide-react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const queryClient = useQueryClient();
  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    bio: "",
    location: "",
    profilePic: "",
  });

  const { data: profileData, isLoading: loadingProfile } = useQuery({
    queryKey: ["authUserProfile"],
    queryFn: getAuthUser,
  });

  const { data: friends = [], isLoading: loadingFriends } = useQuery({
    queryKey: ["userFriends"],
    queryFn: getUserFriends,
  });

  const { mutate: updateProfileMutation, isLoading: updatingProfile } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUserProfile"] });
      setEditMode(false);
    },
  });

  useEffect(() => {
    if (profileData && profileData.user) {
      setFormData({
        fullName: profileData.user.fullName || "",
        bio: profileData.user.bio || "",
        location: profileData.user.location || "",
        profilePic: profileData.user.profilePic || "",
      });
    }
  }, [profileData]);

  if (loadingProfile) {
    return (
      <div className="flex justify-center py-12">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRandomAvatar = () => {
    const idx = Math.floor(Math.random() * 100) + 1; // 1-100
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;
    setFormData((prev) => ({ ...prev, profilePic: randomAvatar }));
    toast.success("Random avatar generated!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfileMutation(formData);
  };

  const profile = profileData?.user;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-10">
      {/* Profile Info */}
      <div className="card bg-base-200 p-6 flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="avatar size-24 rounded-full">
            <img
              src={formData.profilePic || profile?.profilePic || "default-avatar.png"}
              alt={formData.fullName || profile?.fullName || "User"}
            />
          </div>
          {editMode && (
            <button
              type="button"
              className="btn btn-accent btn-sm flex items-center gap-1"
              onClick={handleRandomAvatar}
            >
              <ShuffleIcon className="size-4" /> Random Avatar
            </button>
          )}
        </div>

        <div className="flex-1 space-y-4">
          {editMode ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="input input-bordered w-full"
              />
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Bio"
                className="textarea textarea-bordered w-full"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={updatingProfile}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <h2 className="text-2xl font-bold">{formData.fullName || profile?.fullName}</h2>
              {(formData.location || profile?.location) && (
                <p className="opacity-70">📍 {formData.location || profile?.location}</p>
              )}
              {(formData.bio || profile?.bio) && (
                <p className="text-sm opacity-70">{formData.bio || profile?.bio}</p>
              )}
              <button
                className="btn btn-outline mt-2"
                onClick={() => setEditMode(true)}
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>

      {/* Friends List */}
      <div>
        <h3 className="text-xl font-bold mb-4">Your Friends</h3>

        {loadingFriends ? (
          <div className="flex justify-center py-6">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : friends.length === 0 ? (
          <NoFriendsFound />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {friends.map((friend) => (
              <FriendCard key={friend._id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
