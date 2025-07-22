import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useNotification } from '../src/hooks/useNotification';

describe('useNotification hook', () => {
  it('should show and hide notification', () => {
    const { result } = renderHook(() => useNotification());

    expect(result.current.notification).toBeNull();

    act(() => {
      result.current.showNotification('Test message', 'success');
    });

    expect(result.current.notification).toEqual({
      show: true,
      message: 'Test message',
      type: 'success',
      fadeOut: false,
    });

    act(() => {
      result.current.hideNotification();
    });

    expect(result.current.notification).toBeNull();
  });

  it('should auto-hide after timeout', async () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useNotification());

    act(() => {
      result.current.showNotification('Test message');
    });

    expect(result.current.notification).toBeTruthy();

    await act(async () => {
      vi.runAllTimers();
    });

    expect(result.current.notification).toBeNull();
    vi.useRealTimers();
  });
});
