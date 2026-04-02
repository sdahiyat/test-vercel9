import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export const PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    priceId: null,
    features: [
      '5 active study sessions',
      'Basic progress tracking',
      'Limited AI usage',
      'Follow peers'
    ]
  },
  PRO: {
    name: 'Pro',
    price: 1000, // $10.00 in cents
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    features: [
      'Unlimited study sessions',
      'Advanced progress tracking',
      'Full AI features',
      'Priority support'
    ]
  }
}
