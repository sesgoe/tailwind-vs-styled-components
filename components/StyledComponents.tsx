import styled, { CSSProperties } from 'styled-components';
import type { Availability } from './Tailwind';

const AvailabilityCircleWrapper = styled.span`
    display: flex;
    position: relative;
    width: var(--circleSize);
    height: var(--circleSize);
`;

const AvailabilityPingCircle = styled.span`
    position: absolute;
    display: inline-flex;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
    background-color: var(--pulseColor);
`;

const AvailabilityCircle = styled.span`
    position: relative;
    display: inline-flex;
    width: var(--circleSize);
    height: var(--circleSize);
    border-radius: 9999px;
    background-color: var(--bgColor);
`;

const COLORS = {
    green: {
        '--bgColor': 'rgba(52, 211, 153, 0.75)',
        '--pulseColor': 'rgba(16, 185, 129, 0.75)',
    } as CSSProperties,
    yellow: {
        '--bgColor': 'rgba(251, 191, 36, 0.75)',
        '--pulseColor': 'rgba(245, 158, 11, 0.75)',
    } as CSSProperties,
    red: {
        '--bgColor': 'rgba(248, 113, 113, 0.75)',
        '--pulseColor': 'rgba(239, 68, 68, 0.75)',
    } as CSSProperties,
};

const SIZES = {
    small: {
        '--circleSize': '.75rem',
    } as CSSProperties,
    medium: {
        '--circleSize': '1.25rem',
    } as CSSProperties,
    large: {
        '--circleSize': '2rem',
    } as CSSProperties,
};

type PingCircleColorStyledComponents = keyof typeof COLORS;
type PingCircleSizeStyledComponents = keyof typeof SIZES;

function PingCircleStyledComponents({
    color,
    size,
}: {
    color: PingCircleColorStyledComponents;
    size: PingCircleSizeStyledComponents;
}) {
    const colors = COLORS[color];
    const sizes = SIZES[size];

    const styles = {
        ...colors,
        ...sizes,
    };

    return (
        <AvailabilityCircleWrapper style={styles}>
            <AvailabilityPingCircle></AvailabilityPingCircle>
            <AvailabilityCircle></AvailabilityCircle>
        </AvailabilityCircleWrapper>
    );
}

const UserWrapper = styled.div`
    display: flex;
`;

const InitialsCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 9999px;
    background-color: rgba(229, 231, 235, 1);
`;

const Initials = styled.p`
    font-size: 1.125rem /* 18px */;
    line-height: 1.75rem /* 28px */;
    font-weight: 800;
    color: rgba(55, 65, 81, 1);
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    margin-top: 0.3rem;
`;

const FullName = styled.p`
    font-size: 1.5rem /* 24px */;
    line-height: 2rem /* 32px */;
    font-weight: 600;
`;

const AvailabilityWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const AvailabilityText = styled.p`
    margin-left: 0.25rem;
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
    letter-spacing: 0.025em;
    color: rgba(209, 213, 219, 1);
`;

export function UserStyledComponents({
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

    const getIndicatorColor = (availability: Availability): PingCircleColorStyledComponents => {
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
        <UserWrapper>
            <InitialsCircle>
                <Initials>{getInitials(fullName)}</Initials>
            </InitialsCircle>
            <RightWrapper>
                <FullName>{fullName}</FullName>
                <AvailabilityWrapper>
                    <PingCircleStyledComponents
                        color={getIndicatorColor(availability)}
                        size="small"
                    />
                    <AvailabilityText>{availability.toUpperCase()}</AvailabilityText>
                </AvailabilityWrapper>
            </RightWrapper>
        </UserWrapper>
    );
}
