import { BentoGrid, BentoGridItem } from './ui/BentoGrid'; 
import { gridItems } from '@/data/index';
import MagicButton from './ui/MagicButton';
import { BackgroundBeams } from './ui/BackgroundBeams';

const Grid = () => {
    return (
        <section id="services">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Our Subjects
            </h1>
            <BentoGrid>
                {gridItems.map((item) => (
                    <BentoGridItem
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        topics={item.topics}
                        levels={item.levels}
                        icon={item.icon}
                    />
                ))}       
            </BentoGrid>
            {/* Call to Action */}
            <div className="relative h-auto py-16">
                <div className="absolute inset-0 w-full h-full bg-slate-950/75">
                    <BackgroundBeams />
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-4 text-white">Ready to Excel?</h2>
                    <p className="text-xl mb-8 text-gray-200">
                        Book your first session today and start your journey to academic success!
                    </p>
                    <a href="/contact">
                        <MagicButton
                            title="Contact Us Now"
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Grid;