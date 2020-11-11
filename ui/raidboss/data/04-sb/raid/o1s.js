'use strict';

// O1S - Deltascape 1.0 Savage
[{
  zoneId: ZoneId.DeltascapeV10Savage,
  timelineFile: 'o1s.txt',
  triggers: [
    {
      id: 'O1S Blaze',
      netRegex: NetRegexes.startsUsing({ id: '1EDD', source: 'Alte Roite', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '1EDD', source: 'Alte Roite', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '1EDD', source: 'Alte Roite', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '1EDD', source: 'アルテ・ロイテ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '1EDD', source: '老者', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '1EDD', source: '알테 로이테', capture: false }),
      response: Responses.stackMarker(),
    },
    {
      id: 'O1S Breath Wing',
      netRegex: NetRegexes.startsUsing({ id: '1ED6', source: 'Alte Roite', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '1ED6', source: 'Alte Roite', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '1ED6', source: 'Alte Roite', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '1ED6', source: 'アルテ・ロイテ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '1ED6', source: '老者', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '1ED6', source: '알테 로이테', capture: false }),
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Breath Wing: Be beside boss',
          de: 'Atemschwinge: Neben Boss gehen',
          ja: 'ブレスウィング: ボスに近づく',
          cn: '站boss附近',
          ko: '날개바람: 보스 옆으로',
        },
      },
    },
    {
      id: 'O1S Clamp',
      netRegex: NetRegexes.startsUsing({ id: '1EDE', source: 'Alte Roite', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '1EDE', source: 'Alte Roite', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '1EDE', source: 'Alte Roite', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '1EDE', source: 'アルテ・ロイテ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '1EDE', source: '老者', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '1EDE', source: '알테 로이테', capture: false }),
      response: Responses.awayFromFront(),
    },
    {
      id: 'O1S Downburst',
      netRegex: NetRegexes.startsUsing({ id: '1ED8', source: 'Alte Roite', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '1ED8', source: 'Alte Roite', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '1ED8', source: 'Alte Roite', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '1ED8', source: 'アルテ・ロイテ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '1ED8', source: '老者', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '1ED8', source: '알테 로이테', capture: false }),
      response: Responses.knockback(),
    },
    {
      id: 'O1S Roar',
      netRegex: NetRegexes.startsUsing({ id: '1ED4', source: 'Alte Roite', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '1ED4', source: 'Alte Roite', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '1ED4', source: 'Alte Roite', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '1ED4', source: 'アルテ・ロイテ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '1ED4', source: '老者', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '1ED4', source: '알테 로이테', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'O1S Charybdis',
      netRegex: NetRegexes.startsUsing({ id: '1ED3', source: 'Alte Roite', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '1ED3', source: 'Alte Roite', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '1ED3', source: 'Alte Roite', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '1ED3', source: 'アルテ・ロイテ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '1ED3', source: '老者', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '1ED3', source: '알테 로이테', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Alte Roite': 'Alte Roite',
        'Ball Of Fire': 'Feuerball',
        'Wyrm Tail': 'Antiker Drachenschweif',
      },
      'replaceText': {
        '\\(safe\\)': '(sicher)',
        '\\(spread\\)': '(verteilen)',
        '\\(stack\\)': '(sammeln)',
        'Blaze': 'Frost',
        'Breath Wing': 'Atemschwinge',
        'Charybdis': 'Charybdis',
        'Clamp': 'Klammer',
        'Classical': 'Klassisch',
        'Downburst': 'Fallböe',
        'Flash Freeze': 'Blitzeis',
        'Flame': 'Flamme',
        'Inner Fireballs': 'Innere Feuerbälle',
        'Levinbolt': 'Blitzschlag',
        'Outer Fireballs': 'Äusere Feuerbälle',
        'Roar': 'Brüllen',
        'Twin Bolt': 'Zwillingsschlag',
        'Wyrm Tail': 'Antiker Drachenschweif',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Alte Roite': 'Alte Roite',
        'Ball Of Fire': 'Boule de flammes',
        'Wyrm Tail': 'Queue du dragon ancestral',
      },
      'replaceText': {
        'Blaze': 'Givre',
        'Breath Wing': 'Aile déferlante',
        'Charybdis': 'Charybde',
        'Clamp': 'Pinçage',
        'Downburst': 'Rafale descendante',
        'Flash Freeze': 'Glaciation instantanée',
        'Flame': 'Flamme',
        'Levinbolt': 'Fulguration',
        'Roar': 'Rugissement',
        'Twin Bolt': 'Éclairs jumeaux',
        'Wyrm Tail': 'Queue du dragon ancestral',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Alte Roite': 'アルテ・ロイテ',
        'Ball Of Fire': '火炎球',
        'Wyrm Tail': '太古の龍尾',
      },
      'replaceText': {
        '\\(safe\\)': '(安置)',
        '\\(spread\\)': '(散開)',
        '\\(stack\\)': '(頭割り)',
        'Blaze': 'ブレイズ',
        'Breath Wing': 'ブレスウィング',
        'Charybdis': 'ミールストーム',
        'Clamp': 'クランプ',
        'Classical': 'クラシカル',
        'Downburst': 'ダウンバースト',
        'Flash Freeze': 'フラッシュフリーズ',
        'Flame': '炎',
        'Inner Fireballs': '火炎球 (十)',
        'Levinbolt': '稲妻',
        'Outer Fireballs': '火炎球 (外)',
        'Roar': '咆哮',
        'Twin Bolt': 'ツインボルト',
        'Wyrm Tail': '太古の龍尾',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Alte Roite': '老者',
        'Ball Of Fire': '火焰球',
        'Wyrm Tail': '太古龙尾',
      },
      'replaceText': {
        '(safe)': '(安全)',
        '(spread)': '(分散)',
        '(stack)': '(分摊)',
        'Blaze': '冰焰',
        'Breath Wing': '风息之翼',
        'Charybdis': '大漩涡',
        'Clamp': '压迫',
        'Classical': '经典',
        'Downburst': '下行突风',
        'Flash Freeze': '闪耀冻结',
        'Flame': '火焰',
        'Inner Fireballs': '内圈火球',
        'Levinbolt': '闪电',
        'Outer Fireballs': '外圈火球',
        'Roar': '咆哮',
        'Twin Bolt': '双重落雷',
        'Wyrm Tail': '太古龙尾',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Alte Roite': '알테 로이테',
        'Ball Of Fire': '화염 구체',
        'Wyrm Tail': '태고의 용 꼬리',
      },
      'replaceText': {
        'Blaze': '화염',
        'Breath Wing': '날개바람',
        'Charybdis': '대소용돌이',
        'Clamp': '압박',
        'Classical': '고대 원소',
        'safe': '안전',
        'spread': '산개',
        'stack': '쉐어',
        'Downburst': '하강 기류',
        'Flash Freeze': '급속 동결',
        'Flame': '불꽃',
        'Inner Fireballs': '안쪽 화염구',
        'Levinbolt': '우레',
        'Outer Fireballs': '바깥 화염구',
        'Roar': '포효',
        'Twin Bolt': '이중 낙뢰',
        'Wyrm Tail': '태고의 용 꼬리',
      },
    },
  ],
}];
