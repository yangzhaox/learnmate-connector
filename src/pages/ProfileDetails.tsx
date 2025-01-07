import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockProfile = {
  id: 1,
  name: "Sarah Chen",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  programmingLanguage: "JavaScript",
  spokenLanguage: "English, Mandarin",
  progress: "Intermediate",
  location: "Singapore",
  bio: "Full-stack developer passionate about building user-friendly applications. Looking for a study partner to practice React and Node.js together.",
  availability: "Weekday evenings (GMT+8)",
};

const ProfileDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();

  const handleConnect = () => {
    toast({
      title: "Connection request sent!",
      description: "We'll notify you when they respond.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-6">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Card className="p-8">
          <div className="flex flex-col items-center mb-8">
            <img
              src={mockProfile.image}
              alt={mockProfile.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h1 className="text-2xl font-bold">{mockProfile.name}</h1>
            <p className="text-gray-500">{mockProfile.location}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">About</h2>
              <p className="text-gray-700">{mockProfile.bio}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="font-semibold">Programming Language</h2>
                <p className="text-gray-700">{mockProfile.programmingLanguage}</p>
              </div>
              <div>
                <h2 className="font-semibold">Spoken Languages</h2>
                <p className="text-gray-700">{mockProfile.spokenLanguage}</p>
              </div>
              <div>
                <h2 className="font-semibold">Learning Progress</h2>
                <p className="text-gray-700">{mockProfile.progress}</p>
              </div>
              <div>
                <h2 className="font-semibold">Availability</h2>
                <p className="text-gray-700">{mockProfile.availability}</p>
              </div>
            </div>

            <Button className="w-full" onClick={handleConnect}>
              Connect via Email
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileDetails;