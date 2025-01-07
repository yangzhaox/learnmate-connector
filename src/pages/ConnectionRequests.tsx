import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const mockIncoming = [
  {
    id: 1,
    name: "David Kim",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    programmingLanguage: "Python",
    spokenLanguage: "English, Korean",
    location: "Seoul, South Korea",
  },
];

const mockOutgoing = [
  {
    id: 2,
    name: "Maria Garcia",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    programmingLanguage: "JavaScript",
    spokenLanguage: "English, Spanish",
    location: "Barcelona, Spain",
    status: "Pending",
  },
];

const ConnectionRequests = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAccept = (id: number) => {
    toast({
      title: "Request accepted!",
      description: "You can now start learning together.",
    });
  };

  const handleDecline = (id: number) => {
    toast({
      title: "Request declined",
      description: "The request has been declined.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Connection Requests</h1>

        <Tabs defaultValue="incoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="incoming">Incoming Requests</TabsTrigger>
            <TabsTrigger value="outgoing">Outgoing Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="incoming">
            {mockIncoming.map((request) => (
              <Card key={request.id} className="p-6 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={request.image}
                      alt={request.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{request.name}</h3>
                      <p className="text-sm text-gray-500">{request.location}</p>
                      <p className="text-sm">
                        {request.programmingLanguage} • {request.spokenLanguage}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => handleDecline(request.id)}
                    >
                      Decline
                    </Button>
                    <Button onClick={() => handleAccept(request.id)}>
                      Accept
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="outgoing">
            {mockOutgoing.map((request) => (
              <Card key={request.id} className="p-6 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={request.image}
                      alt={request.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{request.name}</h3>
                      <p className="text-sm text-gray-500">{request.location}</p>
                      <p className="text-sm">
                        {request.programmingLanguage} • {request.spokenLanguage}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                    {request.status}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ConnectionRequests;