import authTypes from '../../../constants/authTypes';
import regularHandler from '../../../utils/requestHandler';
import { getUserById } from '../../../data/queries/userQueries';

/**
 * @swagger
 * /api/v1/user/profile:
 *   get:
 *     tags:
 *       - API
 *     description: Returns the current user profile
 *     security: 
 *       - ServerBearerAuth: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: User profile information
 */
const extract = request => {

    const { userId } = request.user;
    return { userId };
}

const execute = async (request, params) => {
    const { userId } = params
    var results = await getUserById(userId);
    return prepareResponse(results.userName, results._id)
}

const prepareResponse = (userName, id) => {
    return {
        userName,
        id
    }
}

export default {
    handler: regularHandler(extract, execute),
    authScheme: authTypes.SERVER_TOKEN
};