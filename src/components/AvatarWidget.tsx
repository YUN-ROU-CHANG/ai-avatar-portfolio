import { useEffect, useRef } from 'react';

/**
 * AvatarWidget - Perxona AI Avatar 掛載點
 * 右下角浮窗。當天活動會提供 Perxona SDK 和配置參數。
 *
 * 集成步驟：
 * 1. 從 Perxona 獲得 embed script URL 和 Avatar ID
 * 2. 更新 index.html <head> 或這裡動態載入 script
 * 3. 初始化 Perxona Avatar（具體 API 待 Perxona 提供）
 */
export default function AvatarWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Perxona SDK 初始化會在這裡進行
    // 暫時留空，當天活動會提供具體集成方式
  }, []);

  return (
    <div
      ref={containerRef}
      id="perxona-avatar-widget"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        // Perxona 會為這個容器注入 iframe 或 component
      }}
      aria-label="AI Avatar Assistant"
    />
  );
}
