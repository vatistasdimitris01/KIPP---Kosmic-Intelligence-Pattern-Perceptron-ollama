
export interface SpecItem {
  label: string;
  value: string;
}

export interface PersonalityTrait {
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'kipp';
  text: string;
}
