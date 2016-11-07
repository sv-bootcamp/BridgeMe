import express from 'express';
import * as user from '../controllers/users.controller';

/*
 * Define the URL routing for http://yoda-domain.com/users/*
 */

const router = express.Router();

//POST method

/**
 * @api {post} /users/localSignUp Request Local Sign up
 * @apiName localSignUp
 * @apiGroup User
 *
 * @apiDescription Local Sign up
 *
 * @apiParam {String} email Email address that would used as ID
 * @apiParam {String} password Password that would used
 *
 */
router.post('/localSignUp', user.localSignUp);

/**
 * @api {post} /users/localSignIn Request Local Sign in
 * @apiName localSignIn
 * @apiGroup User
 *
 * @apiDescription Local Sign in
 *
 * @apiParam {String} email Email address that would used as ID
 * @apiParam {String} password Password that would used
 *
 */
router.post('/localSignIn', user.localSignIn);

/**
 * @api {post} /users/signIn Request Sign in
 * @apiName signIn
 * @apiGroup User
 *
 * @apiDescription If you sign in first, server will register user automatically. After that, server will sign user in.
 *
 * @apiParam {String} access_token access_token gained from Platform API.
 * @apiParam {Number} platform_type Platform that user used when join { Facebook: 1,  LinkedIn: 2 }.
 *
 */
router.post('/signIn', user.signIn);

/**
 * @api {post} /users/secretCode Request a secret code for reset the password.
 * @apiName secretCode
 * @apiGroup User
 *
 * @apiDescription Random secret code would return. The same code would be sent to user by mail.
 *
 * @apiParam {String} email Email address of user to reset the password
 *
 */
router.post('/secretCode', user.requestSecretCode);

/**
 * @api {post} /users/resetPassword Request a secret code for reset the password.
 * @apiName resetPassword
 * @apiGroup User
 *
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "msg": "The password had been changed successfully."
 *     }
 *
 * @apiDescription
 *
 * @apiParam {String} email Email address of user to reset the password
 * @apiParam {String} password Password New password
 *
 */
router.post('/resetPassword', user.resetPassword);

/**
 * @api {post} /users/editGeneral Request Edit general information
 * @apiName editGeneral
 * @apiGroup User
 *
 *  * @apiParamExample {json} Parameter Sample
 *     {
 *         "name": "조사라",
 *         "email": "joytutu29@naver.com",
 *         "languages": "Korean, English",
 *         "location": "",
 *         "about": "Hi, I am Sarah",
 *         "work" : [],
 *         "education" : [
 *              {
 *                  "type" : "High School",
 *                  "school" : {
 *                      "name" : "노은고등학교"
 *                  }
 *              },
 *              {
 *                  "type" : "College",
 *                  "concentration" : [
 *                      {
 *                          "name" : "IT공학과"
 *                      }
 *                  ],
 *                  "school" : {
 *                      "name" : "숙명여자대학교 Sookmyung Women's University"
 *                  }
 *              }
 *         ],
 *         "image" : "iVBOAAzCAYAAADiTxxnHl0LT5jVteHlN+5q+JCKBJ"
 *     }
 * @apiDescription {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "msg": "Update success"
 *     }
 * @apiErrorExample {json}
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "err_point": "Authentication failed. Please sign in first."
 *     }
 *
 * @apiParam {String} name Name of User.
 * @apiParam {String} email Information of user email.
 * @apiParam {String} languages Information of user languages.
 * @apiParam {String} location Information of user location.
 * @apiParam {String} about One short sentence about User.
 * @apiParam {Array} work Information of user work history.
 * @apiParam {Array} education Information of user education history.
 * @apiParam {String} image Information of user image.
 *
 */
router.post('/editGeneral', user.editGeneralProfile);

/**
 * @api {post} /users/editJob Request Edit optional information
 * @apiName editJob
 * @apiGroup User
 *
 *  * @apiParamExample {json} Parameter Sample
 *     {
 *         "job" : [
 *              {
 *                  "area" : "Design",
 *                  "role" : "Visual / UI",
 *                  "years" : "0-2 years",
 *                  "education_background" : "Bachelor's"
 *              }
 *         ],
 *     }
 * @apiDescription {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "msg": "Sign up success."
 *     }
 * @apiErrorExample {json}
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "err_point": "Authentication failed. Please sign in first."
 *     }
 *
 * @apiParam {Array} job Information of user job.
 *
 */
router.post('/editJob', user.editJob);

/**
 * @api {post} /users/editHelp Request Edit optional information
 * @apiName editHelp
 * @apiGroup User
 *
 *  * @apiParamExample {json} Parameter Sample
 *     {
 *         "help" : [
 *              {
 *                  "select" : "Requirement",
 *                  "index" : 0
 *              },
 *              {
 *                  "select" : "Resume",
 *                  "index" : 1
 *              },
 *              {
 *                  "select" : "Portfolio",
 *                  "index" : 2
 *              }
 *         ],
 *     }
 * @apiDescription {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "msg": "Sign up success."
 *     }
 * @apiErrorExample {json}
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "err_point": "Authentication failed. Please sign in first."
 *     }
 *
 * @apiParam {Array} help Information of user help.
 * @apiParam {Array} personality Information of user personality.
 *
 */
router.post('/editHelp', user.editHelp);

/**
 * @api {post} /users/editPersonality Request Edit optional information
 * @apiName editPersonality
 * @apiGroup User
 *
 *  * @apiParamExample {json} Parameter Sample
 *     {
 *         "personality" : [
 *              {
 *                  "option" : "Extroverts",
 *                  "score" : 0
 *              },
 *                  "option" : "Introverts",
 *                  "score" : 0
 *              },
 *                  "option" : "Sensors",
 *                  "score" : 1
 *              },
 *                  "option" : "Thinkers",
 *                  "score" : 1
 *              },
 *                  "option" : "Judgers",
 *                  "score" : 2
 *              },
 *                  "option" : "Listener",
 *                  "score" : 2
 *              },
 *                  "option" : "Energetic",
 *                  "score" : 2
 *              },
 *                  "option" : "Unexacting",
 *                  "score" : 1
 *              },
 *                  "option" : "Traditional",
 *                  "score" : 1
 *              }
 *         ]
 *     }
 * @apiDescription {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "msg": "Sign up success."
 *     }
 * @apiErrorExample {json}
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "err_point": "Authentication failed. Please sign in first."
 *     }
 *
 * @apiParam {Array} personality Information of user personality.
 *
 */
router.post('/editPersonality', user.editPersonality);

/**
 * @api {post} /users/setRequestStatus Request User info
 * @apiName setRequestStatus
 * @apiGroup User
 *
 * @apiParam {Boolean} mentorMode Flag for requestGet.
 *
 */
router.post('/setRequestStatus', user.setMentoringRequestStatus);

//GET method

/**
 * @api {get} /users/all Request All User info
 * @apiName getAll
 * @apiGroup User
 *
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *        User1's Info
 *      },
 *      {
 *        User2's Info
 *      },
 *      {
 *        User3's Info
 *      },....
 *     ]
 *
 * @apiErrorExample {json}
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "err_point": "Authentication failed. Please sign in first."
 *     }
 */
router.get('/all', user.getAll);

/**
 * @api {get} /users/id/:id Request User info
 * @apiName getProfileById
 * @apiGroup User
 *
 * @apiSuccessExample {json} Success
 *      HTTP/1.1 200 OK
 *     {
 *       "_id": "57d214b87bdc0820732da371",
 *       "email": "lyw0149@naver.com",
 *       "name": "Yangwoo Lee",
 *       "platform_id": "10205720438113883",
 *       "platform_type": 1,
 *       "locale": "ko_KR",
 *       "timezone": 9,
 *       "profile_picture": "https://scontent.xx.fbcdn.net/v/t1.0-1/...",
 *       "__v": 0,
 *       "date": "2016-09-09T01:47:36.628Z"
 *     }
 *
 * @apiErrorExample {json}
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "err_point": "Authentication failed. Please sign in first."
 *     }
 */
router.get('/id/:_id', user.getProfileById);

/**
 * @api {get} /users/me Request My info
 * @apiName getMyProfile
 * @apiGroup User
 *
 * @apiParam {String} _id ObjectId of User.
 *
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "57d214b87bdc0820732da371",
 *       "email": "lyw0149@naver.com",
 *       "name": "Yangwoo Lee",
 *       "platform_id": "10205720438113883",
 *       "platform_type": 1,
 *       "locale": "ko_KR",
 *       "timezone": 9,
 *       "profile_picture": "https://scontent.xx.fbcdn.net/v/t1.0-1/...",
 *       "__v": 0,
 *       "date": "2016-09-09T01:47:36.628Z"
 *     }
 *
 * @apiErrorExample {json}
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "err_point": "Authentication failed. Please sign in first."
 *     }
 */
router.get('/me', user.getMyProfile);

/**
 * @api {get} /users/mentorlist Request Mentor's list
 * @apiName getMentorList
 * @apiGroup User
 *
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *        Mentor1's Info
 *      },
 *      {
 *        Mentor2's Info
 *      },
 *      {
 *        Mentor3's Info
 *      },....
 *     ]
 *
 * @apiErrorExample {json}
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "err_point": "Authentication failed. Please sign in first."
 *     }
 *
 */
router.get('/mentorlist', user.getMentorList);

/**
 * @api {get} /users/job Request job category list
 * @apiName getJobCategory
 * @apiGroup User
 *
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *        Job category Info
 *      },....
 *     ]
 *
 * @apiErrorExample {json}
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "err_point": "Authentication failed. Please sign in first."
 *     }
 *
 */
router.get('/job', user.getJobCategory);

/**
 * @api {get} /users/getRequestStatus Request User info
 * @apiName getRequestStatus
 * @apiGroup User
 *
 * @apiSuccessExample {json} Success
 *      HTTP/1.1 200 OK
 *     {
 *       "result": true
 *     }
 *
 * @apiErrorExample {json}
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "err_point": "Authentication failed. Please sign in first."
 *     }
 */
router.get('/getRequestStatus', user.getMentoringRequestStatus);

/**
 * @api {get} /users/signout Request Sign out
 * @apiName signout
 * @apiGroup User
 *
 * @apiDescription If you sign out, server will destroy user session.
 *
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     {
 *        Sign out success.
 *     }
 *
 * @apiErrorExample {json}
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "err_point": "Failed to sign out."
 *     }
 */
router.get('/signOut', user.signout);

export default router;
