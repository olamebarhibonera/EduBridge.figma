import { MobileLayout } from '../components/MobileLayout';
import { useState } from 'react';
import { Volume2, Copy, ArrowRightLeft, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';

export function Translate() {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('english');
  const [targetLang, setTargetLang] = useState('swahili');

  const languages = [
    { code: 'english', name: 'English', flag: '🇬🇧' },
    { code: 'swahili', name: 'Swahili', flag: '🇰🇪' },
    { code: 'french', name: 'French', flag: '🇫🇷' },
    { code: 'chinese', name: 'Chinese', flag: '🇨🇳' },
    { code: 'arabic', name: 'Arabic', flag: '🇸🇦' },
  ];

  const commonPhrases = [
    { en: 'Hello', sw: 'Jambo / Habari' },
    { en: 'How much?', sw: 'Ni bei gani?' },
    { en: 'Thank you', sw: 'Asante' },
    { en: 'Where is...?', sw: 'Wapi...?' },
    { en: 'I need help', sw: 'Nahitaji msaada' },
    { en: 'How are you?', sw: 'Habari yako?' },
  ];

  const handleTranslate = () => {
    // Mock translation - in a real app, this would call a translation API
    if (sourceLang === 'english' && targetLang === 'swahili') {
      const translations: { [key: string]: string } = {
        'hello': 'Jambo',
        'goodbye': 'Kwaheri',
        'thank you': 'Asante',
        'how much': 'Ni bei gani',
        'where is': 'Wapi',
      };
      const lower = sourceText.toLowerCase();
      const match = Object.keys(translations).find(key => lower.includes(key));
      setTranslatedText(match ? translations[match] : '[Translation would appear here]');
    } else {
      setTranslatedText('[Translation would appear here]');
    }
  };

  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  const speakText = (text: string) => {
    // Mock text-to-speech
    console.log('Speaking:', text);
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <MobileLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">Translation</h1>
          <p className="text-gray-600">Translate between languages instantly</p>
        </div>

        {/* Language Selection */}
        <div className="flex items-center gap-3">
          <select
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
          
          <button
            onClick={swapLanguages}
            className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
          >
            <ArrowRightLeft className="w-5 h-5" />
          </button>

          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Translation Input */}
        <div className="space-y-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <Textarea
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              placeholder="Enter text to translate..."
              className="border-0 resize-none focus-visible:ring-0 min-h-[120px]"
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => speakText(sourceText)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Volume2 className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => copyText(sourceText)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Copy className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <Button onClick={handleTranslate} className="w-full py-6 rounded-xl">
            Translate
          </Button>

          <div className="bg-blue-50 rounded-2xl p-4 shadow-sm">
            <div className="text-gray-900 min-h-[120px]">
              {translatedText || 'Translation will appear here...'}
            </div>
            {translatedText && (
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => speakText(translatedText)}
                  className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <Volume2 className="w-5 h-5 text-blue-600" />
                </button>
                <button
                  onClick={() => copyText(translatedText)}
                  className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <Copy className="w-5 h-5 text-blue-600" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Common Phrases */}
        <div className="space-y-3">
          <h2 className="font-semibold text-gray-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Common Swahili Phrases
          </h2>
          <div className="space-y-2">
            {commonPhrases.map((phrase, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSourceText(phrase.en);
                  setTranslatedText(phrase.sw);
                }}
                className="w-full bg-white rounded-xl p-4 text-left hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium text-gray-900">{phrase.en}</div>
                    <div className="text-blue-600 text-sm mt-1">{phrase.sw}</div>
                  </div>
                  <Volume2 className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
