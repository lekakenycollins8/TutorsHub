import { BentoGrid, BentoGridItem } from './ui/BentoGrid'; 
import { gridItems } from '@/data/index';
import MagicButton from './ui/MagicButton';

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
                                />
                        ))}       
                </BentoGrid>
                {/* Call to Action */}
                <section className="py-16 bg-purple-600 text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Excel?</h2>
                            <p className="text-xl mb-8">Book your first session today and start your journey to academic success!</p>
                            <a href="/contact">
                                <MagicButton
                                    title="Contact Us Now"
                                />
                            </a>
        </div>
            </section>
        </section>
        
    );
}

export default Grid