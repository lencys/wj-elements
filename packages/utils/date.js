export function formatDate(input, format) {
    let date;

    // Rozpoznanie typu vstupu a jeho konverzia na objekt Date
    if (typeof input === 'string') {
        date = new Date(input); // Predpokladáme, že je to ISO reťazec
    } else if (typeof input === 'number') {
        date = new Date(input); // Predpokladáme, že je to timestamp
    } else if (input instanceof Date) {
        date = input; // Je to objekt Date
    } else {
        throw new Error('Invalid date input');
    }

    const map = {
        yyyy: date.getFullYear(),
        MM: String(date.getMonth() + 1).padStart(2, '0'), // Mesiace sú indexované od 0
        dd: String(date.getDate()).padStart(2, '0'),
        HH: String(date.getHours()).padStart(2, '0'),
        mm: String(date.getMinutes()).padStart(2, '0'),
        ss: String(date.getSeconds()).padStart(2, '0'),
        MMMM: date.toLocaleString('en-US', { month: 'long' }), // Full month name
        MMM: date.toLocaleString('en-US', { month: 'short' }), // Short month name
    };

    return format.replace(/yyyy|MM|dd|HH|mm|ss|MMMM|MMM/g, (matched) => map[matched]);
}

export function toSafeDate(iso) {
    // Match 07:00, 07:00:00, 07:00:00.000, 07:00:00.000Z
    const timeOnlyRegex = /^\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(Z)?$/;

    if (timeOnlyRegex.test(iso)) {
        let cleanTime = iso.replace(/Z$/, ''); // Remove Z if present
        let [h, m, s = '00.000'] = cleanTime.split(':');

        // Ensure seconds and milliseconds
        if (!s.includes('.')) {
            s = `${s}.000`;
        }

        return `1970-01-01T${h}:${m}:${s}Z`;
    }

    return iso;
}
