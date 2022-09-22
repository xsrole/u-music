declare namespace Song {
  type Detail = {
    a: null;
    al: {
      id: number;
      name: string;
      pic: number;
      picUrl: string;
      pic_str: string;
      tns: [];
    };
    alia: [];
    ar: {
      id: number;
      name: string;
      tns: [];
      alias: [];
    }[];
    awardTags: null;
    cd: string;
    cf: string;
    copyright: number;
    cp: number;
    crbt: null;
    djId: number;
    dt: number;
    entertainmentTags: null;
    fee: number;
    ftype: number;
    h: {
      br: number;
      fid: number;
      size: number;
      vd: number;
      sr: number;
    };
    hr: {
      br: number;
      fid: number;
      size: number;
      vd: number;
      sr: number;
    };
    id: number;
    l: {
      br: number;
      fid: number;
      size: number;
      vd: number;
      sr: number;
    };
    m: {
      br: number;
      fid: number;
      size: number;
      vd: number;
      sr: number;
    };
    mark: 536879104;
    mst: number;
    mv: number;
    name: string;
    no: number;
    noCopyrightRcmd: null;
    originCoverType: number;
    originSongSimpleData: null;
    pop: number;
    pst: number;
    publishTime: number;
    resourceState: true;
    rt: string;
    rtUrl: null;
    rtUrls: [];
    rtype: number;
    rurl: null;
    s_id: number;
    single: number;
    songJumpInfo: null;
    sq: {
      br: number;
      fid: number;
      size: number;
      vd: number;
      sr: number;
    };
    st: number;
    t: number;
    tagPicList: null;
    v: number;
    version: number;
  };
  type Url = {
    br: number;
    canExtend: boolean;
    code: number;
    effectTypes: null;
    encodeType: string;
    expi: number;
    fee: number;
    flag: number;
    freeTimeTrialPrivilege: {
      resConsumable: boolean;
      userConsumable: boolean;
      type: number;
      remainTime: number;
    };
    freeTrialInfo: null;
    freeTrialPrivilege: {
      resConsumable: boolean;
      userConsumable: boolean;
      listenType: null;
    };
    gain: number;
    id: number;
    level: string;
    md5: string;
    payed: number;
    podcastCtrp: null;
    rightSource: number;
    size: number;
    time: number;
    type: string;
    uf: null;
    url: string;
    urlSource: number;
  };
  type Playlist = {
    adType: number;
    algTags: null;
    backgroundCoverId: number;
    backgroundCoverUrl: string;
    cloudTrackCount: number;
    commentCount: number;
    commentThreadId: string;
    copied: boolean;
    coverImgId: number;
    coverImgId_str: string;
    coverImgUrl: string;
    createTime: number;
    creator: {
      accountStatus: number;
      anchor: boolean;
      authStatus: number;
      authenticationTypes: number;
      authority: number;
      avatarDetail: {
        userType: number;
        identityLevel: number;
        identityIconUrl: string;
      };
      avatarImgId: number;
      avatarImgIdStr: string;
      avatarImgId_str: string;
      avatarUrl: string;
      backgroundImgId: number;
      backgroundImgIdStr: string;
      backgroundUrl: string;
      birthday: number;
      city: number;
      defaultAvatar: boolean;
      description: string;
      detailDescription: string;
      djStatus: number;
      expertTags: null;
      experts: null;
      followed: boolean;
      gender: number;
      mutual: boolean;
      nickname: string;
      province: number;
      remarkName: null;
      signature: string;
      userId: number;
      userType: number;
      vipType: number;
    };
    description: string;
    englishTitle: string;
    gradeStatus: string;
    highQuality: boolean;
    historySharedUsers: null;
    id: number;
    name: string;
    newImported: boolean;
    officialPlaylistType: string;
    opRecommend: boolean;
    ordered: boolean;
    playCount: number;
    privacy: number;
    remixVideo: null;
    score: null;
    shareCount: number;
    sharedUsers: null;
    specialType: number;
    status: number;
    subscribed: true;
    subscribedCount: number;
    subscribers: {
      accountStatus: number;
      anchor: false;
      authStatus: number;
      authenticationTypes: number;
      authority: number;
      avatarDetail: null;
      avatarImgId: number;
      avatarImgIdStr: string;
      avatarImgId_str: string;
      avatarUrl: string;
      backgroundImgId: number;
      backgroundImgIdStr: string;
      backgroundUrl: string;
      birthday: number;
      city: number;
      defaultAvatar: false;
      description: string;
      detailDescription: string;
      djStatus: number;
      expertTags: null;
      experts: null;
      followed: false;
      gender: number;
      mutual: false;
      nickname: string;
      province: number;
      remarkName: null;
      signature: string;
      userId: number;
      userType: number;
      vipType: number;
    }[];
    tags: string[];
    titleImage: number;
    titleImageUrl: string;
    trackCount: number;
    trackIds: {
      alg: string;
      at: number;
      id: number;
      rcmdReason: string;
      sc: null;
      t: number;
      uid: number;
      v: number;
    }[];
    trackNumberUpdateTime: number;
    trackUpdateTime: number;
    tracks: Detail[];
    updateFrequency: string;
    updateTime: number;
    userId: number;
    videoIds: null;
    videos: null;
  };
}

declare namespace User {
  type Account = {
    anonimousUser: boolean;
    ban: number;
    baoyueVersion: number;
    createTime: number;
    donateVersion: number;
    id: number;
    paidFee: boolean;
    status: number;
    tokenVersion: number;
    type: number;
    userName: string;
    vipType: number;
    whitelistAuthority: number;
  };
  type Profile = {
    accountStatus: number;
    accountType: number;
    anchor: boolean;
    authStatus: number;
    authenticated: boolean;
    authenticationTypes: number;
    authority: number;
    avatarDetail: null;
    avatarImgId: number;
    avatarUrl: string;
    backgroundImgId: number;
    backgroundUrl: string;
    birthday: number;
    city: number;
    createTime: number;
    defaultAvatar: boolean;
    description: null;
    detailDescription: null;
    djStatus: number;
    expertTags: null;
    experts: null;
    followed: boolean;
    gender: number;
    lastLoginIP: string;
    lastLoginTime: number;
    locationStatus: number;
    mutual: boolean;
    nickname: string;
    province: number;
    remarkName: null;
    shortUserName: string;
    signature: string;
    userId: number;
    userName: string;
    userType: number;
    vipType: number;
    viptypeVersion: number;
  };
}