import React from "react";

import { createAvatar } from '@dicebear/core';
import { botttsNeutral } from '@dicebear/collection';

function UserAvatar({ seed }) {
    const svg = createAvatar(botttsNeutral, { seed: seed });

    return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default UserAvatar;