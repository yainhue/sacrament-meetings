import type { SacramentMeeting } from './types';

export const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },
  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Clark',
    openingHymn: { number: 100, title: 'Nearer, My God, to Thee' },
    openingPrayer: 'Brother Hall',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 170, title: 'God, Our Father, Hear Us Pray' },
    speakers: [
      { name: 'Brother Wilson', topic: 'Prayer', type: 'speaker' },
      { name: 'Sister Young', topic: 'Personal Revelation', type: 'speaker' }
    ],
    closingHymn: { number: 134, title: 'I Believe in Christ' },
    closingPrayer: 'Sister Lee',
    announcements: []
  },
  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Brother White',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 190, title: 'In Memory of the Crucified' },
    speakers: [
      { name: 'Sister Adams', topic: 'Service', type: 'speaker' },
      { name: 'Brother Reed', topic: 'Ministering', type: 'speaker' }
    ],
    closingHymn: { number: 219, title: 'Because I Have Been Given Much' },
    closingPrayer: 'Sister Parker',
    announcements: ['Ward picnic next Saturday']
  },
  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Clark',
    openingHymn: { number: 124, title: 'Be Still, My Soul' },
    openingPrayer: 'Sister Green',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 174, title: 'While of These Emblems We Partake' },
    speakers: [
      { name: 'Brother Miller', topic: 'Hope in Christ', type: 'speaker' }
    ],
    closingHymn: { number: 152, title: 'God Be with You Till We Meet Again' },
    closingPrayer: 'Brother Hall',
    announcements: []
  },
  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 27, title: 'Praise to the Man' },
    openingPrayer: 'Sister Lee',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
    speakers: [],
    closingHymn: { number: 136, title: 'I Know That My Redeemer Lives' },
    closingPrayer: 'Brother Wilson',
    announcements: ['Fast offering reminder']
  },
  {
    id: 6,
    date: '2026-06-07',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Clark',
    openingHymn: { number: 66, title: 'Rejoice, the Lord Is King!' },
    openingPrayer: 'Sister Brown',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 196, title: 'Jesus, Once of Humble Birth' },
    speakers: [
      { name: 'Brother Davis', topic: 'The Atonement', type: 'speaker' },
      { name: 'Sister White', topic: 'Forgiveness', type: 'speaker' }
    ],
    closingHymn: { number: 193, title: 'I Stand All Amazed' },
    closingPrayer: 'Brother Reed',
    announcements: []
  },
  {
    id: 7,
    date: '2026-06-14',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 98, title: 'I Need Thee Every Hour' },
    openingPrayer: 'Sister Parker',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
    speakers: [
      { name: 'Youth Speaker', topic: 'Choosing the Right', type: 'speaker' }
    ],
    closingHymn: { number: 240, title: 'Know This, That Every Soul Is Free' },
    closingPrayer: 'Brother Miller',
    announcements: ['Youth conference registration']
  },
  {
    id: 8,
    date: '2026-06-21',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Clark',
    openingHymn: { number: 5, title: 'High on the Mountain Top' },
    openingPrayer: 'Brother Wilson',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 182, title: 'We’ll Sing All Hail to Jesus’ Name' },
    speakers: [
      { name: 'Sister Green', topic: 'Temple Worship', type: 'speaker' },
      { name: 'Brother Young', topic: 'Covenants', type: 'speaker' }
    ],
    closingHymn: { number: 95, title: 'Now the Day Is Over' },
    closingPrayer: 'Sister Adams',
    announcements: []
  },
  {
    id: 9,
    date: '2026-06-28',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Sister Young',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 175, title: 'O God, the Eternal Father' },
    speakers: [
      { name: 'Brother Hall', topic: 'Following the Prophet', type: 'speaker' }
    ],
    closingHymn: { number: 272, title: 'Oh Say, What Is Truth?' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward conference next month']
  },
  {
    id: 10,
    date: '2026-07-05',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Clark',
    openingHymn: { number: 92, title: 'For the Beauty of the Earth' },
    openingPrayer: 'Brother Reed',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 173, title: 'While of These Emblems We Partake' },
    speakers: [],
    closingHymn: { number: 254, title: 'True to the Faith' },
    closingPrayer: 'Sister Green',
    announcements: []
  },
  {
    id: 11,
    date: '2026-07-12',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 129, title: 'Where Can I Turn for Peace?' },
    openingPrayer: 'Sister Lee',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 171, title: 'With Humble Heart' },
    speakers: [
      { name: 'Sister Miller', topic: 'Peace Through Christ', type: 'speaker' }
    ],
    closingHymn: { number: 152, title: 'God Be with You Till We Meet Again' },
    closingPrayer: 'Brother White',
    announcements: []
  },
  {
    id: 12,
    date: '2026-07-19',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Clark',
    openingHymn: { number: 284, title: 'If You Could Hie to Kolob' },
    openingPrayer: 'Sister Brown',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 183, title: 'In Remembrance' },
    speakers: [
      { name: 'Brother Parker', topic: 'The Plan of Salvation', type: 'speaker' }
    ],
    closingHymn: { number: 292, title: 'O My Father' },
    closingPrayer: 'Brother Young',
    announcements: []
  },
  {
    id: 13,
    date: '2026-07-26',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 223, title: 'Have I Done Any Good?' },
    openingPrayer: 'Brother Hall',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
    speakers: [
      { name: 'Sister Davis', topic: 'Charity', type: 'speaker' },
      { name: 'Brother Adams', topic: 'Service Opportunities', type: 'speaker' }
    ],
    closingHymn: { number: 220, title: 'Lord, I Would Follow Thee' },
    closingPrayer: 'Sister Williams',
    announcements: []
  },
  {
    id: 14,
    date: '2026-08-02',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Clark',
    openingHymn: { number: 1, title: 'The Morning Breaks' },
    openingPrayer: 'Brother Miller',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 170, title: 'God, Our Father, Hear Us Pray' },
    speakers: [],
    closingHymn: { number: 304, title: 'Teach Me to Walk in the Light' },
    closingPrayer: 'Sister Parker',
    announcements: []
  },
  {
    id: 15,
    date: '2026-08-09',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 193, title: 'I Stand All Amazed' },
    openingPrayer: 'Sister Adams',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 175, title: 'O God, the Eternal Father' },
    speakers: [
      { name: 'Brother Green', topic: 'Gratitude', type: 'speaker' },
      { name: 'Ward Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 241, title: 'Count Your Blessings' },
    closingPrayer: 'Brother Wilson',
    announcements: ['Missionary farewell next Sunday']
  },

];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}