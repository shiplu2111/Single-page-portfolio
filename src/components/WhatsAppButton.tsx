import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "+8801711002919"; // Replace with your WhatsApp number
  const message = "Hello! I'd like to get in touch.";
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={24} />
    </Button>
  );
};

export default WhatsAppButton;
