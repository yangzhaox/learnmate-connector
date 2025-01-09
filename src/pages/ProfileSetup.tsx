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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ProfileSetup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [programmingLanguage, setProgrammingLanguage] = useState("");
  const [spokenLanguage, setSpokenLanguage] = useState("");
  const [officeLocation, setOfficeLocation] = useState("");
  const [isRemoteOpen, setIsRemoteOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", {
      programmingLanguage,
      spokenLanguage,
      officeLocation,
      isRemoteOpen,
    });
    toast({
      title: "Profile saved!",
      description: "Redirecting to dashboard...",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <Card className="p-6">
          <h1 className="text-2xl font-bold text-center mb-8">Setup Your Profile</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="id">ID</Label>
                <Input
                  id="id"
                  value="12345"
                  readOnly
                  className="bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value="John Doe"
                  readOnly
                  className="bg-gray-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Stack</Label>
              <Select value={programmingLanguage} onValueChange={setProgrammingLanguage}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="csharp">C#</SelectItem>
                  <SelectItem value="ruby">Ruby</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Spoken Language</Label>
              <Select value={spokenLanguage} onValueChange={setSpokenLanguage}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="mandarin">Mandarin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Office Location</Label>
              <Select value={officeLocation} onValueChange={setOfficeLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newyork">New York, USA</SelectItem>
                  <SelectItem value="london">London, UK</SelectItem>
                  <SelectItem value="berlin">Berlin, Germany</SelectItem>
                  <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
                  <SelectItem value="singapore">Singapore</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="remote"
                checked={isRemoteOpen}
                onCheckedChange={setIsRemoteOpen}
              />
              <Label htmlFor="remote">I'm open to remote learning partners</Label>
            </div>

            <Button type="submit" className="w-full">
              Save and Continue
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSetup;