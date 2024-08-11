"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const RecipeAPI = __importStar(require("./recipe-api"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prismaClient = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/api/recipes/search", async (req, res) => {
    const searchTerm = req.query.searchTerm;
    const page = parseInt(req.query.page);
    const results = await RecipeAPI.searchRecipes(searchTerm, page);
    return res.json(results);
});
app.get("/api/recipes/:recipeId/summary", async (req, res) => {
    const recipeId = req.params.recipeId;
    const results = await RecipeAPI.getRecipeSummary(recipeId);
    return res.json(results);
});
app.post("/api/recipes/favorite", async (req, res) => {
    const recipeId = req.body.recipeId;
    try {
        const favoriteRecipe = await prismaClient.favoriteRecipes.create({
            data: {
                recipeId: recipeId,
            },
        });
        return res.status(201).json(favoriteRecipe);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Oops, something went wrong" });
    }
});
app.get("/api/recipes/favorite", async (req, res) => {
    try {
        const recipes = await prismaClient.favoriteRecipes.findMany();
        const recipeIds = recipes.map((recipe) => recipe.recipeId.toString());
        const favorites = await RecipeAPI.getFavoriteRecipesByIDs(recipeIds);
        return res.json(favorites);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Oops, something went wrong" });
    }
});
app.delete("/api/recipes/favorite", async (req, res) => {
    const recipeId = req.body.recipeId;
    try {
        await prismaClient.favoriteRecipes.delete({
            where: {
                recipeId: recipeId,
            },
        });
        return res.status(204).send();
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Oops, something went wrong" });
    }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
