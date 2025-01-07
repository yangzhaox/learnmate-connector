import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const mockProfiles = [
  {
    id: 1,
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    programmingLanguage: "JavaScript",
    spokenLanguage: "English, Mandarin",
    progress: "Intermediate",
    location: "Singapore",
  },
  {
    id: 2,
    name: "Alex Thompson",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    programmingLanguage: "Python",
    spokenLanguage: "English, Spanish",
    progress: "Beginner",
    location: "London, UK",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [filters, setFilters] = useState({
    programmingLanguage: "",
    spokenLanguage: "",
    progress: "",
  });

  const handleConnect = (profileId: number) => {
    console.log("Connecting with profile:", profileId);
    toast({
      title: "Connection request sent!",
      description: "We'll notify you when they respond.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Hi Sarah, let's find your learning partner!</h1>
        
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Programming Language</Label>
              <Select
                value={filters.programmingLanguage}
                onValueChange={(value) =>
                  setFilters({ ...filters, programmingLanguage: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Spoken Language</Label>
              <Select
                value={filters.spokenLanguage}
                onValueChange={(value) =>
                  setFilters({ ...filters, spokenLanguage: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="mandarin">Mandarin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Learning Progress</Label>
              <Select
                value={filters.progress}
                onValueChange={(value) =>
                  setFilters({ ...filters, progress: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="mt-6 w-full md:w-auto">Search</Button>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProfiles.map((profile) => (
            <Card key={profile.id} className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{profile.name}</h3>
                  <p className="text-sm text-gray-500">{profile.location}</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <p>
                  <span className="font-medium">Programming:</span>{" "}
                  {profile.programmingLanguage}
                </p>
                <p>
                  <span className="font-medium">Languages:</span>{" "}
                  {profile.spokenLanguage}
                </p>
                <p>
                  <span className="font-medium">Progress:</span> {profile.progress}
                </p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => navigate(`/profile/${profile.id}`)}
                >
                  View Profile
                </Button>
                <Button
                  className="flex-1"
                  onClick={() => handleConnect(profile.id)}
                >
                  Connect
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;