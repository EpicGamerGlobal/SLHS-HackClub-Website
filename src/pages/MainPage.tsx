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
    const [fluidTrigger, setFluidTrigger] = useState(0);

    useEffect(() => {
        // Ensure all fullpage sections are transparent (fluid shows through)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement && node.classList.contains('fp-section')) {
                        node.style.background = 'transparent';
                    }
                });
            });
        });

        const fullpageContainer = document.querySelector('#fullpage');
        if (fullpageContainer) {
            observer.observe(fullpageContainer, { childList: true, subtree: true });
        }
        document.querySelectorAll('.fp-section').forEach((s) => {
            (s as HTMLElement).style.background = 'transparent';
        });

        const handleActivate = () => setFluidTrigger((p) => p + 1);
        document.addEventListener('click', handleActivate);
        document.addEventListener('keypress', handleActivate);

        return () => {
            observer.disconnect();
            document.removeEventListener('click', handleActivate);
            document.removeEventListener('keypress', handleActivate);
        };
    }, []);

    return (
        <>
            <FluidBackground pageTrigger={fluidTrigger} />
            <ReactFullpage
                licenseKey={'YOUR_LICENSE_KEY'}
                scrollingSpeed={700}
                responsiveWidth={768}
                responsiveHeight={600}
                credits={{ enabled: true, label: 'Made with fullpage.js', position: 'right' }}
                afterLoad={() => setFluidTrigger((p) => p + 1)} // splat on section change
                render={() => (
                    <ReactFullpage.Wrapper>
                        <InfoSection />
                        <SignupSection />
                        <EventsSection />
                        <ProjectsSection />
                        <GallerySection />
                        <ContactSection />
                    </ReactFullpage.Wrapper>
                )}
            />
        </>
    );
};

export default MainPage;
