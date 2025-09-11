import React from 'react';

const VKGroup = () => {
  return (
    <>
    <div id="vk_groups"></div>
      <script type="text/javascript">
        VK.Widgets.Group("vk_groups", {mode: 4, wide: 1, height: 500, color1: "FFFFFF", color2: "000000", color3: "5181B8"}, 223524127);
    </script>
    </>
  );
};

export default VKGroup;