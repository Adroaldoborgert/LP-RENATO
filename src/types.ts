export interface StageItem {
  number: string;
  roman: string;
  title: string;
  tagline: string;
  description: string[];
  keyConcept: string;
  reflectionQuestion: string;
  category: 'rupture' | 'mindset' | 'environment' | 'execution' | 'elevation';
}

export interface PillarItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CheckoutFormState {
  fullName: string;
  email: string;
  phone: string;
  paymentMethod: 'credit_card' | 'pix' | 'boleto';
  installments: number;
}
