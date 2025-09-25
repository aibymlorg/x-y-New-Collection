import React from 'react';
import IconLink from './IconLink';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { ChatbotIcon } from './icons/ChatbotIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { 
  WHATSAPP_LINK, 
  WEB_CHATBOT_LINK,
  FACEBOOK_LINK,
  INSTAGRAM_LINK
} from '../constants';
import RotatingProductDisplay from './RotatingProductDisplay';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 text-white antialiased">
      <div className="text-center w-full max-w-4xl space-y-12 md:space-y-20 flex flex-col items-center">
        {/* Container to prevent layout shift during animation */}
        <div className="h-96 flex items-center justify-center">
          <RotatingProductDisplay />
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center gap-6">
          <IconLink
            href={WHATSAPP_LINK}
            label="Ask on WhatsApp"
            icon={<WhatsappIcon />}
          />
          <IconLink
            href={WEB_CHATBOT_LINK}
            label="Consult with AI"
            icon={<ChatbotIcon />}
          />
          <IconLink
            href={FACEBOOK_LINK}
            label="Follow on Facebook"
            icon={<FacebookIcon />}
          />
          <IconLink
            href={INSTAGRAM_LINK}
            label="See on Instagram"
            icon={<InstagramIcon />}
          />
        </div>
      </div>
    </main>
  );
};

export default App;