export interface Team {
    id: number;
    name: string;
    description?: string;
    type: 'pro' | 'amateur' | 'semi_pro';
    sport: 'football' | 'cricket' | 'baseball' | 'rugby';
}

export interface TeamMember {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    height: number;
    weight: number;
}
