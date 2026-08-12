/**
 * AvatarWidget - Perxona AI Avatar 右下角浮窗
 * 使用 sv-agent 自訂網頁元件
 */
export default function AvatarWidget() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
      }}
      aria-label="AI Avatar Assistant"
    >
      <sv-agent
        agentProfileId="01KZTWC51GP8YGS88R09Y7T9E8"
        presentationMode="embedded"
        apiKey="5c01a0b4-f469-49ba-8862-91ff90e4fd54"
      />
    </div>
  );
}
