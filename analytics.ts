import { track } from '@vercel/analytics';

// Button ID mapping for analytics tracking
export enum ButtonIds {
  TRUBK_OR_TREAT = 'TRUBK_OR_TREAT',
}

const EVENT_KEYS = {
  DONATE_BUTTON_CLICKED: 'donate_button_clicked',
};

/**
 * Tracks donation button clicks for analytics
 * @param buttonId - The ID of the button that was clicked
 */
export function trackDonateButtonClick(buttonId: ButtonIds): void {
  // TODO: Implement actual analytics tracking
  console.log(`Donate button clicked: ${buttonId}`);

  // Example analytics implementation:
  // analytics.track('donate_button_clicked', {
  //   button_id: buttonId,
  //   timestamp: new Date().toISOString(),
  // });
  track(EVENT_KEYS.DONATE_BUTTON_CLICKED, {
    button_id: buttonId,
  });
}
