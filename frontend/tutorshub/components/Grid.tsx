import { BentoGrid, BentoGridItem } from './ui/BentoGrid'; 
import { gridItems } from '@/data/index';

const Grid = () => {
    return (
        <section id="about">
                <BentoGrid>
                        {gridItems.map((item) => (
                                <BentoGridItem
                                    key={item.title}
                                    title={item.title}
                                    description={item.description}
                                    topics={item.topics}
                                    levels={item.levels}
                                    className={item.className}
                                    img={item.img}
                                    // imgClassName={item.imgClassName}
                                    // titleClassName={item.titleClassName}
                                    // spareImg={item.spareImg}
                                />
                        ))}       
                </BentoGrid>
        </section>
    )
}

export default Grid