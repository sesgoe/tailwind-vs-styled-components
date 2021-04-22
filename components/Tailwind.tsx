export type Size = 'small' | 'medium' | 'large';
export type PingCircleColor = 'red' | 'yellow' | 'green';

export function PingCircleTailwind({ size, color }: { size: Size; color: PingCircleColor }) {
    const getColorClasses = (color: PingCircleColor): [bgColor: string, pulseColor: string] => {
        switch (color) {
            case 'green':
                return ['bg-green-400', 'bg-green-500'];
            case 'red':
                return ['bg-red-400', 'bg-red-500'];
            case 'yellow':
                return ['bg-yellow-400', 'bg-yellow-500'];
            default:
                const _exhaustive: never = color;
                return _exhaustive;
        }
    };

    const getSizeClasses = (size: Size) => {
        switch (size) {
            case 'small':
                return 'w-3 h-3';
            case 'medium':
                return 'w-5 h-5';
            case 'large':
                return 'w-8 h-8';
            default:
                const _exhaustive: never = size;
                return _exhaustive;
        }
    };

    const [bgColor, pulseColor] = getColorClasses(color);
    const sizeClasses = getSizeClasses(size);

    return (
        <span className={`relative flex ${sizeClasses}`}>
            <span
                className={`absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping-slow ${pulseColor}`}
            ></span>
            <span className={`relative inline-flex ${sizeClasses} rounded-full ${bgColor}`}></span>
        </span>
    );
}

export type Availability = 'available' | 'unavailable' | 'away';

export function UserTailwind({
    fullName,
    availability,
}: {
    fullName: string;
    availability: Availability;
}) {
    const getInitials = (name: string) => {
        const [first, last] = name.split(' ');
        return first.charAt(0).toUpperCase() + last.charAt(0).toUpperCase();
    };

    const getIndicatorColor = (availability: Availability): PingCircleColor => {
        switch (availability) {
            case 'available':
                return 'green';
            case 'away':
                return 'yellow';
            case 'unavailable':
                return 'red';
            default:
                const _exhaustive: never = availability;
                return _exhaustive;
        }
    };

    return (
        <div>
            <div className="flex space-x-2">
                <div>
                    <div className="flex items-center justify-center bg-gray-200 rounded-full w-11 h-11">
                        <p className="text-lg font-extrabold text-gray-700">
                            {getInitials(fullName)}
                        </p>
                    </div>
                </div>
                <div className="mt-[0.3rem]">
                    <p className="text-2xl font-semibold">{fullName}</p>
                    <div className="flex items-center space-x-1">
                        <PingCircleTailwind size="small" color={getIndicatorColor(availability)} />
                        <p className="text-sm tracking-wide text-gray-300">
                            {availability.toUpperCase()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
