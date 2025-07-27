import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, Calendar, CheckCircle, Edit3 } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);
  
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen bg-base-200 pt-20">
      <div className="max-w-4xl mx-auto p-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-base-content mb-2">
            My Profile
          </h1>
          <p className="text-base-content/70 text-lg">
            Manage your account information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                {/* Avatar Section */}
                <div className="avatar indicator mb-4">
                  <div className="indicator-item indicator-bottom indicator-end">
                    <label
                      htmlFor="avatar-upload"
                      className={`btn btn-circle btn-sm btn-primary ${
                        isUpdatingProfile ? "loading" : ""
                      }`}
                    >
                      {!isUpdatingProfile && <Camera className="w-4 h-4" />}
                      <input
                        type="file"
                        id="avatar-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={isUpdatingProfile}
                      />
                    </label>
                  </div>
                  <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={selectedImg || authUser.profilePic || "/avatar.png"}
                      alt="Profile"
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>

                <h2 className="card-title text-2xl">{authUser?.fullName}</h2>

                <div className="badge badge-success gap-2">
                  <CheckCircle className="w-3 h-3" />
                  Active Account
                </div>
                {isUpdatingProfile ? (
                  <div className="alert alert-info mt-4">
                    <span className="loading loading-spinner loading-sm"></span>
                    <span>Updating profile photo...</span>
                  </div>
                ): (<p className="text-base-content/60 text-sm mt-2">
                    Click the camera icon to update your photo
                  </p>)}
              </div>
            </div>
          </div>

          {/* Information Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-primary" />
                  Personal Information
                </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <User className="w-4 h-4" />
                      Full Name
                    </div>
                    <div className="input input-bordered flex items-center bg-base-200">
                      {authUser?.fullName}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </div>
                    <div className="input input-bordered flex items-center bg-base-200">
                      {authUser?.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Details */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  Account Details
                </h2>
                <div className="overflow-x-auto">
                  <table className="table table-zebra">
                    <tbody>
                      <tr>
                        <td className="font-medium">Member Since</td>
                        <td>
                          <div className="badge badge-outline">
                            {authUser.createdAt?.split("T")[0]}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-medium">Account Status</td>
                        <td>
                          <div className="badge badge-success gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Active
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-xl">
              <div className="card-body">
                <h3 className="card-title flex items-center gap-2">
                  <Edit3 className="w-5 h-5" />
                  Quick Actions
                </h3>
                <p className="opacity-90 mb-4">
                  Enhance your profile with additional information
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-ghost btn-sm">Update Bio</button>
                  <button className="btn btn-ghost btn-sm">
                    Privacy Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
