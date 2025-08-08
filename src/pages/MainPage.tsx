import React, { useEffect, useState } from 'react';
import InfoSection from '../components/sections/InfoSection';
import SignupSection from '../components/sections/SignupSection';
import EventsSection from '../components/sections/EventsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import GallerySection from '../components/sections/GallerySection';
import ContactSection from '../components/sections/ContactSection';
import ReactFullpage from '@fullpage/react-fullpage';
import FluidBackground from '../components/ui/FluidBackground';

const MainPage: React.FC = () => {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement && node.classList.contains('fp-section')) {
              node.style.background = 'transparent';
            }
          });
        }
      });
    });

    const fullpageContainer = document.querySelector('#fullpage');
    if (fullpageContainer) {
      observer.observe(fullpageContainer, { childList: true, subtree: true });
    }

    const existingSections = document.querySelectorAll('.fp-section');
    existingSections.forEach((section) => {
      (section as HTMLElement).style.background = 'transparent';
    });

    const handleClick = () => {
      setFluidTrigger(prev => prev + 1);
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keypress', handleClick);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keypress', handleClick);
    };
  }, []);
  
  const [fluidTrigger, setFluidTrigger] = useState(0)

  return (
    <>
      <FluidBackground pageTrigger={fluidTrigger} />
      <ReactFullpage
        licenseKey={'YOUR_LICENSE_KEY'}
        scrollingSpeed={700}
        afterLoad={() => {
          setFluidTrigger(prev => prev + 1);
          console.log("Next page")
        }}
        credits={{enabled: true, label: 'Made with fullpage.js', position: 'right'}}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <InfoSection />
              <SignupSection />
              <EventsSection />
              <ProjectsSection />
              <GallerySection />
              <ContactSection />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default MainPage;
