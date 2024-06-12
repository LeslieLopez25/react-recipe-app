import { useEffect, useState } from "react";
import { RecipeSummary } from "../types";
import * as.RecipeAPI from "../api"

const RecipeModal = () => {
  const [recipeSummary, setRecipeSummary] = useState<RecipeSummary>();

  useEffect(() => {
    const fetchRecipeSummary = async () => {
    try {
      const summaryRecipe = await getRecipeSummary(recipeId)
      setRecipeSummary(summaryRecipe)
    } catch (error) {
      console.log(error)
    }
    }
    
    fetchRecipeSummary()
})

  if (!recipeSummary) {
    return <></>;
  }

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>{recipeSummary?.title}</h2>
            <span className="close-btn">&times;</span>
          </div>
          <p dangerouslySetInnerHTML={{ __html: recipeSummary.summary }}></p>
        </div>
      </div>
    </>
  );
};

export default RecipeModal;
