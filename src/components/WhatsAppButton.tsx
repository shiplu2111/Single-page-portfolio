import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappNumber = "+8801711002919"; // Replace with your WhatsApp number
  const message = "Hello! I'd like to get in touch.";
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed flex items-center justify-center bottom-6 right-6 h-16 w-16 rounded-full shadow-lg hover:shadow-xl z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8 md:h-10 md:w-10" />
    </button>
  );
};

export default WhatsAppButton;
