import { useState } from 'react';
import { postService } from '../../../../services/post/postService';

export function useLikes({ postID, likes, userID }) {
  const [likesCount, setLikesCount] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(() => likes.filter((like) => like.user === userID) > 0);

  function toggleLike() {
    if (!isLiked) {
      setLikesCount(likesCount + 1);
    } else {
      setLikesCount(likesCount - 1);
    }

    setIsLiked(!isLiked);
    postService
      .toggleLike({ postID });
    // .then((res) => {
    //   if (res > 0) {
    //     setLikesCount(likesCount + res));
    //   }
    // }
  }

  return {
    likesCount,
    isLiked,
    toggleLike,
  };
}
