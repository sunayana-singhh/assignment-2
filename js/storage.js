export function saveRegistration(data) {
    const registrations = getRegistrations();
    registrations.push(data);
    sessionStorage.setItem('registrations', JSON.stringify(registrations));
  }
  
  export function getRegistrations() {
    const stored = sessionStorage.getItem('registrations');
    return stored ? JSON.parse(stored) : [];
  }
  
  export function clearRegistrations() {
    sessionStorage.removeItem('registrations');
  }