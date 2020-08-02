import unittest
import get_schedule

class TestGetGames(unittest.TestCase):
    def test_valid_date(self):
        result = get_schedule.get_games("20200801")
        self.assertTrue(len(result) > 0)

    def test_invalid_date(self):
        result = get_schedule.get_games("foobar")
        self.assertEqual(result, None)

if __name__ == '__main__':
    unittest.main()
