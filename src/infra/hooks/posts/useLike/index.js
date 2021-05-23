import { useState } from 'react';
import { postService } from '../../../../services/post/postService';

export function useLikes({ postID, likes, userID }) {
  const [likesCount, setLikesCount] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(() => {
    const hasUserLiked = likes.filter((like) => like.user === userID).length > 0;
    return hasUserLiked;
  });

  function toggleLike() {
    if (!isLiked) {
      setLikesCount(likesCount + 1);
    } else {
      setLikesCount(likesCount - 1);
    }

    setIsLiked(!isLiked);

    postService
      .toggleLike({ postID });
  }

  return {
    likesCount,
    isLiked,
    toggleLike,
  };
}
