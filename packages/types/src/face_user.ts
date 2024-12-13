interface FaceUser {
  userID: number;
  userName: string;
  email?: string;
  profilePic?: string;
  faceImg?: Uint16Array;
}

export type { FaceUser };
