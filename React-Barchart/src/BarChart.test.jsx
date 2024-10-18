import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { vi } from 'vitest'
import BarChart from './BarChart';

describe('Customer', () => {
  it('renders customer', () => {
    vi.mock('react-chartjs-2',  { spy: true })
  });
});