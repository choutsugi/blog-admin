interface IArticle {
  title: string;
  description: string;
  content: string;
  allowComment: boolean;
  isTop: boolean;
  tags: number[];
  category: number | null;
}

const createArticle = () => {
  let article: IArticle = {
    title: "",
    description: "",
    content: "",
    allowComment: true,
    isTop: false,
    tags: [],
    category: null,
  };

  return article;
};

export { createArticle };
export type { IArticle };
