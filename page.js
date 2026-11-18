const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const content = {
 en: {
  support: ['Support','Focus. Break. Repeat.',[
   ['Getting started','Start with Focus 25 minutes and Break 5 minutes. Start begins or resumes, Stop pauses, and Reset restores the configured interval. The center Focus and Break icons switch phases.'],
   ['Focus plans (iOS 1.1 and later)','Open the path icon beside Settings to create up to 12 named work steps, with separate focus and break times. Check the total duration and optional finish-by budget, then start. Plans stop after the final focus, with no trailing break. Pause, skip, or return to the original loop. A finish-by budget does not force work to stop. Up to 50 plans and the last 30 run records stay on this device. Delete templates or clear Recent plans in Focus plans.'],
   ['Time and sound','Drag the clock boundary or the end of the break arc to adjust time. Settings includes durations, Melody, Volume and a speaker button to try the sound. Use + to save a named routine.'],
   ['If you cannot hear an alert','Check app volume, device volume, notification permission, silent mode and Focus settings. Foreground audio and background notifications use different volume controls. The repeating loop schedules the next 60 phase endings and replenishes them when reopened. In iOS 1.1 and later, finite plans schedule only their remaining phase endings, up to 23. It does not guarantee unlimited notifications while left unopened. Elapsed time is reconciled when you return.'],
   ['Saved settings','Settings and routines stay on each device. They do not sync between iPhone and Mac.'],
   ['What to include','Please include your device, OS and app versions, steps to reproduce, and whether the app was visible or the screen was locked. Do not send passwords, payment details or government identifiers.']
  ]],
  privacy: ['Privacy policy','Your timer settings stay on your device.',[
   ['Data in the app','Pomodoro Loop Timer works without an account. It has no advertising, analytics or tracking SDKs. Timer settings, routine names, saved task plans, step names and recent run records (completed/skipped intervals, timed focus and dates) are not transmitted to a developer-operated server. They stay on each device and do not sync between devices.'],
   ['Notifications','Notifications are optional and scheduled locally. The developer does not store a notification account or a server-side push token. Change notification permission in system settings.'],
   ['Deletion and backups','Delete routines in Settings. In iOS 1.1 and later, delete saved plans in Focus plans and clear Recent plans to remove run history. On iPhone or iPad, Delete App removes local app data; Offload App preserves it. On Mac, preferences may remain after removing the app. OS backups and restoration follow your Apple settings. The developer has no server copy of your app data.'],
   ['Information handled by Apple',"App Store purchases, payments, OS diagnostics and backups are handled under Apple's terms, privacy policies and your settings. The developer does not receive credit card details through the app."],
   ['Support correspondence','If you email support, the developer receives your email address and message. They are used and kept as needed to respond and resolve the issue, then deleted when no longer needed for that purpose, except where retention is legally required. Email is handled through Gmail. Contact support for privacy questions or deletion of support correspondence.'],
   ['This website','This website has no developer-added analytics, advertising or contact form. The hosting service, GitHub Pages, may process access information such as IP addresses. See the hosting privacy policy linked below.'],
   ['Changes','Changes to this policy will be posted here with an updated effective date.']
  ]]
 },
 ja: {
  support: ['サポート','集中と休憩を、心地よく繰り返す。',[
   ['はじめに','初回はFocus 25分、Break 5分。Startで開始・再開、Stopで一時停止。リセットで設定した時間に戻ります。中央のFocus・Breakアイコンで切り替えられます。'],
   ['作業プラン（iOS 1.1以降）','設定横の経路アイコンから、名前付きの作業を最大12件並べ、作業ごとの集中・休憩時間を決められます。全体の所要時間と、任意の終了希望日時に収まるかを確認して開始します。最後の集中後は休憩を入れず自動停止。一時停止・スキップ・従来のループへの復帰に対応します。終了希望日時で作業を強制終了する機能ではありません。最大50件のプランと直近30件の実行記録は端末内に保存されます。Focus plans内でプランの削除とRecent plansの消去ができます。'],
   ['時間と音を変える','時計の境目や休憩の終端をドラッグして調整できます。設定では時間、Melody、Volumeを変更し、スピーカーボタンで試聴できます。名前付きのルーティンは＋ボタンから保存します。'],
   ['音が聞こえないとき','アプリの音量、端末の音量、通知の許可、消音・集中モードを確認してください。アプリ表示中の音量と、バックグラウンド通知の音量は別の設定です。繰り返しループは次の60回分の終了通知を予約し、アプリを開いたときに補充します。iOS 1.1以降の有限プランは残りの切り替え分のみ最大23件を予約します。開かないまま無期限に通知し続けることは保証していません。再度開くと経過時間を反映します。'],
   ['設定の保存','設定とルーティンは各端末に保存されます。iPhoneとMacの間では同期しません。'],
   ['お問い合わせの前に','端末名、OS・アプリのバージョン、問題が起きる操作、画面表示中かロック中かをお知らせください。パスワード、決済情報、マイナンバーなどは送らないでください。']
  ]],
  privacy: ['プライバシーポリシー','タイマーの設定は、あなたの端末に。',[
   ['アプリ内のデータ','Pomodoro Loop Timerはアカウントなしで使えます。広告、アクセス解析、追跡用SDKはありません。タイマー設定、ルーティン名、保存した作業プランと作業名、実行記録（完了・スキップした区間、集中の計測時間と日時）を開発者のサーバーへ送信しません。データは各端末に保存され、端末間では同期されません。'],
   ['通知','通知は任意で、端末内で予約します。開発者は通知用のアカウントやサーバー側のプッシュ通知トークンを保管しません。通知の許可はOSの設定で変更できます。'],
   ['データの削除とバックアップ','ルーティンは設定から削除できます。iOS 1.1以降の作業プランはFocus plansから削除でき、実行履歴はRecent plansの消去で削除できます。iPhone・iPadで「アプリを削除」するとローカルのアプリデータが削除されます。「アプリを取り除く」はデータを保持します。Macではアプリを削除した後も設定が残る場合があります。OSのバックアップや復元はAppleの設定に従います。開発者のサーバーにはアプリデータのコピーはありません。'],
   ['Appleが扱う情報','App Storeの購入、決済、OSの診断情報やバックアップは、Appleの規約・プライバシーポリシーと利用者の設定に従って扱われます。開発者はアプリを通じてクレジットカード情報を取得しません。'],
   ['お問い合わせ情報','メールで連絡すると、メールアドレスと送信内容を受け取ります。問い合わせ対応と問題解決に必要な範囲で使用・保管し、法令上必要な場合を除き、その目的で不要になった情報は削除します。メールはGmailを通じて扱います。本方針やお問い合わせ情報の削除については、下記の連絡先へご連絡ください。'],
   ['このWebサイト','このサイトには独自の解析・広告・問い合わせフォームはありません。ホスティングサービス（GitHub Pages）がIPアドレスなどのアクセス情報を処理する場合があります。詳細は下記のホスティングのプライバシーポリシーをご確認ください。'],
   ['変更','本方針を変更する場合は、このページと施行日を更新します。']
  ]]
 }
};
export default {
 async fetch(request, env) {
  const url = new URL(request.url);
  if (!['/','/support','/privacy'].includes(url.pathname)) return new Response('Not found',{status:404});
  const lang = url.searchParams.get('lang') === 'ja' ? 'ja' : 'en';
  const ja = lang === 'ja';
  const privacy = url.pathname === '/privacy';
  const email = String(env.PUBLIC_SUPPORT_EMAIL || '');
  const publisher = esc(env.PUBLIC_PUBLISHER_NAME || '');
  if (!/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email) || !publisher) return new Response('Support information is being prepared.',{status:503});
  const [title,lead,sections] = content[lang][privacy?'privacy':'support'];
  const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Pomodoro Loop Timer support and privacy policy"><title>${title} · Pomodoro Loop Timer</title><style>
:root{color-scheme:dark;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#e6eff0;background:#152128}*{box-sizing:border-box}body{margin:0;background:radial-gradient(ellipse at 90% 0%,#244649 0,transparent 48%);min-height:100vh}a{color:#6de4d0;text-underline-offset:4px;overflow-wrap:anywhere}header,main,footer{max-width:820px;margin:auto;padding:28px}header{display:flex;justify-content:space-between;gap:24px;align-items:center;border-bottom:1px solid #ffffff18}.brand{font-size:15px;letter-spacing:.04em;font-weight:600;text-decoration:none;color:inherit}.language{white-space:nowrap;font-size:14px}nav{display:flex;gap:24px;margin:14px 0 38px}nav a{font-size:14px}h1{font-size:clamp(30px,6vw,46px);font-weight:500;letter-spacing:-.025em;margin:0 0 16px}h2{font-size:19px;font-weight:600;margin:0 0 12px}.lead{font-size:21px;color:#b5dcd6;margin:0 0 20px}.muted,footer{color:#a5b7bf;font-size:13px}section{margin:34px 0;padding-top:28px;border-top:1px solid #ffffff18}p{line-height:1.9;margin:12px 0}footer{border-top:1px solid #ffffff18;margin-top:16px;padding-bottom:44px}a:focus-visible{outline:2px solid #6de4d0;outline-offset:6px}@media(max-width:500px){header,main,footer{padding:22px}.brand{max-width:180px;line-height:1.5}nav{margin-bottom:28px}}
</style></head><body><header><a class="brand" href="/?lang=${lang}">Pomodoro Loop Timer</a><span class="language"><a href="${url.pathname}?lang=en" lang="en">EN</a> · <a href="${url.pathname}?lang=ja" lang="ja">日本語</a></span></header><main><nav aria-label="${ja?'ページ':'Pages'}"><a href="/support?lang=${lang}">${ja?'サポート':'Support'}</a><a href="/privacy?lang=${lang}">${ja?'プライバシー':'Privacy'}</a></nav><h1>${title}</h1><p class="lead">${lead}</p>${privacy?`<p class="muted">${ja?'施行日：2026年11月18日 · 提供者：':'Effective November 18, 2026 · Publisher: '}${publisher}</p>`:''}${sections.map(([h,p])=>`<section><h2>${h}</h2><p>${p}</p></section>`).join('')}<section><h2>${ja?'連絡先':'Contact'}</h2><p><a href="mailto:${esc(email)}">${esc(email)}</a></p>${privacy?`<p><a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">${ja?'ホスティングのプライバシーポリシー':'Hosting privacy policy'}</a></p>`:''}</section></main><footer>Pomodoro Loop Timer · ${publisher}</footer></body></html>`;
  return new Response(html,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'public, max-age=300','x-content-type-options':'nosniff','referrer-policy':'strict-origin-when-cross-origin','content-security-policy':"default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'"}});
 }
};
