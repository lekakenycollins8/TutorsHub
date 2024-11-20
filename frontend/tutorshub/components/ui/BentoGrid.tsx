import { cn } from "@/lib/utils";
import Globe from "@/components/ui/Globe";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 auto-rows-fr max-w-7xl mx-auto px-4 md:px-8",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    topics,
    levels,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    topics?: string[];
    levels?: string[];
}) => {
    return (
        <div
            className={cn(
                "relative rounded-xl group shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl overflow-hidden p-6 bg-gradient-to-r from-purple-700 via-blue-700 to-blue-700 text-white",
                className
            )}
        >
            <div className="flex flex-col space-y-4">
                {/* Title */}
                <h3 className="text-lg font-semibold group-hover:text-yellow-300">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/80">
                    {description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                    {topics?.map((topic, idx) => (
                        <span
                            key={topic + idx}
                            className="bg-blue-300 text-blue-900 text-xs font-medium px-2 py-1 rounded-full"
                        >
                            {topic}
                        </span>
                    ))}
                </div>

                {/* Levels */}
                <div className="flex flex-wrap gap-2">
                    {levels?.map((level, idx) => (
                        <span
                            key={level + idx}
                            className="bg-green-300 text-green-900 text-xs font-medium px-2 py-1 rounded-full"
                        >
                            {level}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
