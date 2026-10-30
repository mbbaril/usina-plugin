// Retire the synth worker after its existing clients close.
// Browser presets and sessions remain in origin storage.
self.addEventListener('activate', event => {
  event.waitUntil(self.registration.unregister());
});
