export function initPhotoProtection() {
  const activateGreenScreen = () => {
    document.body.classList.add('screenshot-shield-active');
  };

  const deactivateGreenScreen = () => {
    // Delay before revealing images again
    setTimeout(() => {
      document.body.classList.remove('screenshot-shield-active');
    }, 500);
  };

  // 1. Block Context Menu (Right-Click & Long-Press on Mobile)
  document.addEventListener('contextmenu', (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'IMG' || target.closest('.protected-photo-container')) {
      event.preventDefault();
      activateGreenScreen();
      deactivateGreenScreen();
    }
  });

  // 2. Block Drag-and-Drop
  document.addEventListener('dragstart', (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'IMG' || target.closest('.protected-photo-container')) {
      event.preventDefault();
    }
  });

  // 3. Detect Screenshot & Print Shortcuts
  document.addEventListener('keydown', (event) => {
    const key = event.key ? event.key.toLowerCase() : '';

    // PrintScreen Key
    if (key === 'printscreen' || event.code === 'PrintScreen') {
      activateGreenScreen();
      navigator.clipboard?.writeText(''); // Clear clipboard if allowed
      deactivateGreenScreen();
    }

    // Mac: Cmd + Shift + 3 / 4 / 5 (Snipping tools)
    // Windows: Ctrl + P (Print), Win + Shift + S
    if (
      (event.metaKey && event.shiftKey && ['3', '4', '5'].includes(key)) ||
      (event.ctrlKey && key === 'p') ||
      (event.metaKey && key === 'p')
    ) {
      activateGreenScreen();
      deactivateGreenScreen();
    }
  });

  // 4. Trigger Green Screen on Window Blur / Snipping Tool Focus Loss
  window.addEventListener('blur', () => {
    activateGreenScreen();
  });

  window.addEventListener('focus', () => {
    deactivateGreenScreen();
  });

  // 5. Visibility Change (Tab or App Switching on Mobile/Desktop)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      activateGreenScreen();
    } else {
      deactivateGreenScreen();
    }
  });
}

// Support initial load and Astro View Transitions
document.addEventListener('astro:page-load', initPhotoProtection);
initPhotoProtection();