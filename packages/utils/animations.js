export let animations = [];

function parseCSS(css) {
  const keyframesRegex = /@keyframes\s+([\w-]+)\s*{([\s\S]+?})\s*}/g;
  let match;
  let localAnimations = [];

  while ((match = keyframesRegex.exec(css)) !== null) {
    let name = match[1];
    let frames = match[2].trim();
    let keyframes = parseKeyframes(frames);

    localAnimations.push({ name, keyframes });
  }

  return localAnimations;
}

function parseKeyframes(frames) {
  const frameRegex = /([\d%]+)\s*{([\s\S]+?)}/g;
  let match;
  let keyframes = [];

  while ((match = frameRegex.exec(frames)) !== null) {
    let offset = parseFloat(match[1]) / 100; // Prevedenie percent na desatinné číslo
    let properties = parseProperties(match[2]);

    // Preformátovanie vlastností na požadovaný formát
    let keyframeObject = {
      offset: offset,
      ...properties
    };

    keyframes.push(keyframeObject);
  }

  // Zoradenie keyframes podľa offsetu
  keyframes.sort((a, b) => a.offset - b.offset);

  return keyframes;
}

function parseProperties(propertiesString) {
  const properties = {};
  propertiesString.split(';').forEach(property => {
    const [key, value] = property.split(':').map(part => part.trim());
    if (key && value) {
      // Mapovanie názvov vlastností na požadované kľúčové slová
      if (key === 'animation-timing-function') {
        properties['easing'] = value;
      } else {
        properties[key] = value;
      }
    }
  });
  return properties;
}

export async function fetchAndParseCSS(url) {
  try {
    if(animations.length > 0) {
      return animations;
    }
    const response = await fetch(url);
    const cssText = await response.text();
    animations = parseCSS(cssText);

    return animations;
    // Tu môžete spracovať extrahované animácie ďalej
  } catch (error) {
    console.error('Error:', error);
  }
}